<?php

namespace App\Service;

use Symfony\Component\Mailer\MailerInterface;
use Symfony\Bridge\Twig\Mime\TemplatedEmail;
use App\Entity\Order;

class EmailHandler
{
    private MailerInterface $mailer; 

    public function __construct(MailerInterface $mailer)
    {
        $this->mailer = $mailer;
    }

    public function sendTemplateEmail(string $toEmail, string $subject, string $template, array $context): void
    {
        $email = (new TemplatedEmail())
        ->from('zeconfirmation@zemarket.com')
        ->to($toEmail)
        ->subject($subject)
        ->htmlTemplate($template)
        ->context($context);

        $this->mailer->send($email);
    }

    public function sendOrderConfirmationEmail(Order $order): void
    {
        $orderItems = [];
        foreach ($order->getProduct() as $product) {
            $orderItems[] = [
                'product_name' => $product->getName(),
                'price' => $product->getPrice(),
            ];
        }

        $this->sendTemplateEmail(
            $order->getUser()->getEmail(),
            "Confirmation de commande",
            "email/order_confirmation.html.twig",
            [
                'order_number' => $order->getId(),
                'order_items' => $orderItems,
                'order_total' => $order->getPrice(),
                'order_date' => $order->getCreatedAt(), 
            ]
        );
    }
}
