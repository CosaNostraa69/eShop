<?php

namespace App\Controller\Admin;

use App\Entity\Categories;
use App\Entity\Order;
use App\Entity\Product;
use App\Entity\Promotion;
use App\Entity\Users;
use EasyCorp\Bundle\EasyAdminBundle\Config\Crud;
use EasyCorp\Bundle\EasyAdminBundle\Config\Dashboard;
use EasyCorp\Bundle\EasyAdminBundle\Config\MenuItem;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractDashboardController;
use EasyCorp\Bundle\EasyAdminBundle\Router\AdminUrlGenerator;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class DashboardController extends AbstractDashboardController
{
public function __construct(
    private AdminUrlGenerator $adminUrlGenerator
    ){

    }

    #[Route('/admin', name: 'admin')]
    public function index(): Response
    {

        $url = $this->adminUrlGenerator
        ->setController(ProductCrudController::class)
        ->generateUrl();
        return $this->redirect($url);
    }

    public function configureDashboard(): Dashboard
    {
        return Dashboard::new()
            ->setTitle('Ze Market');
    }

    public function configureMenuItems(): iterable
    {
        yield MenuItem::section('eShop');

        yield MenuItem::section('My Shop');

        yield MenuItem::subMenu('Products', 'fas fa-bars')->setSubItems([
            MenuItem::linkToCrud('Create product', 'fas fa-plus', Product::class)->setAction(Crud::PAGE_NEW),
            MenuItem::linkToCrud('Show products', 'fas fa-eye', Product::class)
        ]);


        yield MenuItem::subMenu('Categories', 'fas fa-bars')->setSubItems([
            MenuItem::linkToCrud('Create Category', 'fas fa-plus', Categories::class)->setAction(Crud::PAGE_NEW),
            MenuItem::linkToCrud('Show Categories', 'fas fa-eye', Categories::class)
        ]);


        yield MenuItem::subMenu('Orders', 'fas fa-bars')->setSubItems([
            MenuItem::linkToCrud('Create Order', 'fas fa-plus', Order::class)->setAction(Crud::PAGE_NEW),
            MenuItem::linkToCrud('Show Orders', 'fas fa-eye', Order::class)
        ]);
        
        
        yield MenuItem::subMenu('Promotions', 'fas fa-bars')->setSubItems([
            MenuItem::linkToCrud('Create Promotion', 'fas fa-plus', Promotion::class)->setAction(Crud::PAGE_NEW),
            MenuItem::linkToCrud('Show Promotions', 'fas fa-eye', Promotion::class)
        ]);


        yield MenuItem::subMenu('Users', 'fas fa-bars')->setSubItems([
            MenuItem::linkToCrud('Create User', 'fas fa-plus', Users::class)->setAction(Crud::PAGE_NEW),
            MenuItem::linkToCrud('Show Users', 'fas fa-eye', Users::class)
        ]);


    }
}
