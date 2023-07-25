<?php

namespace App\Controller;

use App\Service\EmailHandler;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use App\Repository\OrderRepository;

class EmailController extends AbstractController
{
    private EmailHandler $emailHandler;
    private OrderRepository $orderRepository;

    public function __construct(EmailHandler $emailHandler, OrderRepository $orderRepository)
    {
        $this->emailHandler = $emailHandler;
        $this->orderRepository = $orderRepository;
    }

    #[Route('/email/{orderId}', name: 'app_email')]
    public function index(int $orderId): Response
    {
        $order = $this->orderRepository->find($orderId);
    
        if (!$order) {
            throw $this->createNotFoundException(
                'Aucune commande trouvée pour l\'id ' . $orderId
            );
        }
    
        if ($order->getUser() === null) {
            throw new \Exception(
                'Aucun utilisateur associé à la commande avec l\'id ' . $orderId
            );
        }
    
        $this->emailHandler->sendOrderConfirmationEmail($order);
    
        return $this->render('email/index.html.twig', [
            'controller_name' => 'EmailController',
        ]);
    }
    
    
}
