<?php

namespace App\Controller\Admin;

use App\Entity\Promotion;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\IdField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;
use EasyCorp\Bundle\EasyAdminBundle\Field\DateTimeField;
use EasyCorp\Bundle\EasyAdminBundle\Field\IntegerField;

class PromotionCrudController extends AbstractCrudController
{
    public static function getEntityFqcn(): string
    {
        return Promotion::class;
    }

    public function configureFields(string $pageName): iterable
    {
        return [
            IdField::new('id')->hideOnForm(),
            TextField::new('code'),
            DateTimeField::new('createdAt'),
            TextField::new('category'),
            IntegerField::new('value'),
        ];
    }
    
}
