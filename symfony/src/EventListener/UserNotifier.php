<?php

namespace App\EventListener;

use App\Entity\Users;
use Doctrine\Bundle\DoctrineBundle\Attribute\AsEntityListener;
use Doctrine\ORM\Events;
use App\Entity\Order;
use App\Service\EmailHandler;
use Doctrine\ORM\Event\PrePersistEventArgs;

#[AsEntityListener(event: Events::prePersist , method: 'postUpdate', entity: Order::class)]
class UserNotifier
{
    private EmailHandler $emailHandler; 

    public function __construct(EmailHandler $emailHandler)
    {
        $this->emailHandler = $emailHandler;
    }

    public function postUpdate(Order $order, PrePersistEventArgs $event): void
    {
        $order = $event->getObject();

        if (!$order instanceof Order) {
            return;
        }

        $orderItems = [];
        foreach ($order->getProduct() as $product) {
            $orderItems[] = [
                'product_name' => $product->getName(),
                'price' => $product->getPrice(),
            ];
        }

        $email = $order->getUser()->getEmail();

        $orderNumber = $order->getId();
        $orderTotal = $order->getPrice(); 

        $subject = 'Order Confirmation';
        $context = [
            'firstname' => $order->getUser()->getFirstName(),
            'order_number' => $orderNumber,
            'order_total' => $orderTotal,
            'order_items' => $orderItems,
            'company' => 'Your Company Name'
        ];

        $this->emailHandler->sendTemplateEmail($email, $subject, 'email/order_confirmation.html.twig', $context); 
    }
}
