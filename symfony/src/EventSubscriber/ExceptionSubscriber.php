<?php

namespace App\EventSubscriber;

use App\Service\ResponseService;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;
use Symfony\Component\HttpKernel\Event\ExceptionEvent;
use Symfony\Component\HttpKernel\Exception\AccessDeniedHttpException;
use Symfony\Component\HttpKernel\KernelEvents;

final class ExceptionSubscriber implements EventSubscriberInterface
{



  public static function getSubscribedEvents(): array
  {
    return [
      KernelEvents::EXCEPTION => ['customKernelEventExceptions'],
    ];
  }

  public function customKernelEventExceptions(ExceptionEvent $event): void
  {
    // Decommenter pour avoir le détail d'une erreur lors d'un fetch qui échoue
    dd($event);

  }
}