<?php

namespace App\EventListener;

use App\Entity\Order;
use Doctrine\Bundle\DoctrineBundle\Attribute\AsEntityListener;
use Doctrine\ORM\Events;
use App\Service\EmailHandler;
use Doctrine\ORM\Event\PrePersistEventArgs;

#[AsEntityListener(event: Events::prePersist, method: 'postPersist', entity: Order::class)]
class UserOrderNotifier 
{
    private EmailHandler $emailHandler;

    public function __construct(EmailHandler $emailHandler)
    {
        $this->emailHandler = $emailHandler;
    }

    public function postPersist(Order $order, PrePersistEventArgs $event): void
    {
        $email = $order->getUser()->getEmail();

        $orderNumber = $order->getId();
        $orderTotal = $order->getPrice();

        $orderItems = [];
        foreach ($order->getProduct() as $product) {
            $orderItems[] = [
                'product_name' => $product->getName(),
                'price' => $product->getPrice(),
            ];
        }

        $context = [
            'order_number' => $orderNumber,
            'order_items' => $orderItems,
            'order_total' => $orderTotal,
            'customer_name' => $order->getUser()->getFirstName() . ' ' . $order->getUser()->getLastName(),
        ];

        $this->emailHandler->sendTemplateEmail($email, 'Order Confirmation', 'email/order_confirmation.html.twig', $context);
    }
}
