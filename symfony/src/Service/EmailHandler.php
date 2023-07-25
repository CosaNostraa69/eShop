<?php

namespace App\Service;

use Symfony\Bridge\Twig\Mime\TemplatedEmail;
use Symfony\Component\Mailer\MailerInterface;
use App\Entity\Order;

class EmailHandler
{
    private MailerInterface $mailer;

    public function __construct(
        MailerInterface $mailer,
    )
    {
        $this->mailer = $mailer;
    }

    public function sendOrderConfirmationEmail(Order $order): void
    {
        $orderItems = [];
    
        foreach($order->getProduct() as $product){
            $orderItems[] = [
                'product_name' => $product->getName(), 
                'price' => $product->getPrice()
            ];
        }
    
        $email = (new TemplatedEmail())
            ->from('order@zemarket.com') 
            ->to($order->getUser()->getEmail()) 
            ->subject('Confirmation de votre commande')
            ->htmlTemplate('email/order_confirmation.html.twig')
            ->context([
                'customer_name' => $order->getUser()->getFirstName() . ' ' . $order->getUser()->getLastName(),
                'order_number' => $order->getId(),
                'order_items' => $orderItems,
                'order_total' => $order->getPrice(),
            ]);
    
        $this->mailer->send($email);
    }
    
    
    
}