<?php

namespace App\DataFixtures;

use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use App\Entity\Product;
use DateTime;

class AppFixtures extends Fixture
{
    public function load(ObjectManager $manager): void
    {
        $products = [
            [
                "Name" => "Marlboro Rouge",
                "Description" => "Paquet de 20 cigarettes Marlboro Rouge",
                "Stock" => 100,
                "Category" => "Cigarettes",
                "ProductType" => "Tabac",
                "CreatedAt" => "2023-07-01T00:00:00Z",
                "UpdatedAt" => "2023-07-16T00:00:00Z",
                "Price" => 10.00,
                "Available" => true
            ],
            [
                "Name" => "Camel Bleu",
                "Description" => "Paquet de 20 cigarettes Camel Bleu",
                "Stock" => 80,
                "Category" => "Cigarettes",
                "ProductType" => "Tabac",
                "CreatedAt" => new \DateTime("2023-07-01"),
                "UpdatedAt" => new \DateTime("2023-07-16"),
                "Price" => 9.50,
                "Available" => true
            ],
            [
                "Name" => "Lucky Strike Original",
                "Description" => "Paquet de 20 cigarettes Lucky Strike Original",
                "Stock" => 70,
                "Category" => "Cigarettes",
                "ProductType" => "Tabac",
                "CreatedAt" => new \DateTime("2023-07-01"),
                "UpdatedAt" => new \DateTime("2023-07-16"),
                "Price" => 9.00,
                "Available" => true
            ],
            [
                "Name" => "Gauloises Blondes",
                "Description" => "Paquet de 20 cigarettes Gauloises Blondes",
                "Stock" => 90,
                "Category" => "Cigarettes",
                "ProductType" => "Tabac",
                "CreatedAt" => new \DateTime("2023-07-01"),
                "UpdatedAt" => new \DateTime("2023-07-16"),
                "Price" => 8.50,
                "Available" => true
            ],
            [
                "Name" => "Dunhill International",
                "Description" => "Paquet de 20 cigarettes Dunhill International",
                "Stock" => 60,
                "Category" => "Cigarettes",
                "ProductType" => "Tabac",
                "CreatedAt" => new \DateTime("2023-07-01"),
                "UpdatedAt" => new \DateTime("2023-07-16"),
                "Price" => 11.00,
                "Available" => true
            ],
            [
                "Name" => "Chesterfield Blue",
                "Description" => "Paquet de 20 cigarettes Chesterfield Blue",
                "Stock" => 75,
                "Category" => "Cigarettes",
                "ProductType" => "Tabac",
                "CreatedAt" => new \DateTime("2023-07-01"),
                "UpdatedAt" => new \DateTime("2023-07-16"),
                "Price" => 8.50,
                "Available" => true
            ],
            [
                "Name" => "Davidoff Classic",
                "Description" => "Paquet de 20 cigarettes Davidoff Classic",
                "Stock" => 65,
                "Category" => "Cigarettes",
                "ProductType" => "Tabac",
                "CreatedAt" => new \DateTime("2023-07-01"),
                "UpdatedAt" => new \DateTime("2023-07-16"),
                "Price" => 10.50,
                "Available" => true
            ],
            [
                "Name" => "Winston Red",
                "Description" => "Paquet de 20 cigarettes Winston Red",
                "Stock" => 85,
                "Category" => "Cigarettes",
                "ProductType" => "Tabac",
                "CreatedAt" => new \DateTime("2023-07-01"),
                "UpdatedAt" => new \DateTime("2023-07-16"),
                "Price" => 9.00,
                "Available" => true
            ],
            [
                "Name" => "Pall Mall Red",
                "Description" => "Paquet de 20 cigarettes Pall Mall Red",
                "Stock" => 80,
                "Category" => "Cigarettes",
                "ProductType" => "Tabac",
                "CreatedAt" => new \DateTime("2023-07-01"),
                "UpdatedAt" => new \DateTime("2023-07-16"),
                "Price" => 8.00,
                "Available" => true
            ],
            [
                "Name" => "Kent Blue",
                "Description" => "Paquet de 20 cigarettes Kent Blue",
                "Stock" => 95,
                "Category" => "Cigarettes",
                "ProductType" => "Tabac",
                "CreatedAt" => new \DateTime("2023-07-01"),
                "UpdatedAt" => new \DateTime("2023-07-16"),
                "Price" => 9.50,
                "Available" => true
            ],
            
            [
                "Name" => "Le Figaro",
                "Description" => "Edition quotidienne du journal Le Figaro",
                "Stock" => 45,
                "Category" => "Journaux et magazines",
                "ProductType" => "Presse",
                "CreatedAt" => new \DateTime("2023-07-01"),
                "UpdatedAt" => new \DateTime("2023-07-16"),
                "Price" => 2.70,
                "Available" => true
            ],
            [
                "Name" => "Liberation",
                "Description" => "Edition quotidienne du journal Liberation",
                "Stock" => 30,
                "Category" => "Journaux et magazines",
                "ProductType" => "Presse",
                "CreatedAt" => new \DateTime("2023-07-01"),
                "UpdatedAt" => new \DateTime("2023-07-16"),
                "Price" => 2.20,
                "Available" => true
            ],
            [
                "Name" => "Le Parisien",
                "Description" => "Edition quotidienne du journal Le Parisien",
                "Stock" => 50,
                "Category" => "Journaux et magazines",
                "ProductType" => "Presse",
                "CreatedAt" => new \DateTime("2023-07-01"),
                "UpdatedAt" => new \DateTime("2023-07-16"),
                "Price" => 2.30,
                "Available" => true
            ],
            [
                "Name" => "L'Equipe",
                "Description" => "Edition quotidienne du journal L'Equipe",
                "Stock" => 55,
                "Category" => "Journaux et magazines",
                "ProductType" => "Presse",
                "CreatedAt" => new \DateTime("2023-07-01"),
                "UpdatedAt" => new \DateTime("2023-07-16"),
                "Price" => 2.00,
                "Available" => true
            ],
            [
                "Name" => "Les Echos",
                "Description" => "Edition quotidienne du journal Les Echos",
                "Stock" => 40,
                "Category" => "Journaux et magazines",
                "ProductType" => "Presse",
                "CreatedAt" => new \DateTime("2023-07-01"),
                "UpdatedAt" => new \DateTime("2023-07-16"),
                "Price" => 3.00,
                "Available" => true
            ],
            [
                "Name" => "Le Canard Enchainé",
                "Description" => "Edition hebdomadaire du journal Le Canard Enchainé",
                "Stock" => 60,
                "Category" => "Journaux et magazines",
                "ProductType" => "Presse",
                "CreatedAt" => new \DateTime("2023-07-01"),
                "UpdatedAt" => new \DateTime("2023-07-16"),
                "Price" => 1.50,
                "Available" => true
            ],
            [
                "Name" => "Charlie Hebdo",
                "Description" => "Edition hebdomadaire du journal Charlie Hebdo",
                "Stock" => 65,
                "Category" => "Journaux et magazines",
                "ProductType" => "Presse",
                "CreatedAt" => new \DateTime("2023-07-01"),
                "UpdatedAt" => new \DateTime("2023-07-16"),
                "Price" => 2.00,
                "Available" => true
            ],
            [
                "Name" => "L'Obs",
                "Description" => "Edition hebdomadaire du magazine L'Obs",
                "Stock" => 70,
                "Category" => "Journaux et magazines",
                "ProductType" => "Presse",
                "CreatedAt" => new \DateTime("2023-07-01"),
                "UpdatedAt" => new \DateTime("2023-07-16"),
                "Price" => 3.50,
                "Available" => true
            ],
            [
                "Name" => "Paris Match",
                "Description" => "Edition hebdomadaire du magazine Paris Match",
                "Stock" => 75,
                "Category" => "Journaux et magazines",
                "ProductType" => "Presse",
                "CreatedAt" => new \DateTime("2023-07-01"),
                "UpdatedAt" => new \DateTime("2023-07-16"),
                "Price" => 4.00,
                "Available" => true
            ],
            
            [
                "Name" => "Bonbons Haribo",
                "Description" => "Sachet de 200g de bonbons Haribo",
                "Stock" => 150,
                "Category" => "Gâteaux et bonbons",
                "ProductType" => "Confiserie",
                "CreatedAt" => "2023-07-01T00:00:00Z",
                "UpdatedAt" => "2023-07-16T00:00:00Z",
                "Price" => 1.50,
                "Available" => true
            ],
            [
                "Name" => "Bonbons Skittles",
                "Description" => "Sachet de 200g de bonbons Skittles",
                "Stock" => 120,
                "Category" => "Gâteaux et bonbons",
                "ProductType" => "Confiserie",
                "CreatedAt" => new \DateTime("2023-07-01"),
                "UpdatedAt" => new \DateTime("2023-07-16"),
                "Price" => 1.70,
                "Available" => true
            ],
            [
                "Name" => "Gâteau Choco Nuts",
                "Description" => "Gâteau au chocolat et aux noix de 500g",
                "Stock" => 100,
                "Category" => "Gâteaux et bonbons",
                "ProductType" => "Confiserie",
                "CreatedAt" => new \DateTime("2023-07-01"),
                "UpdatedAt" => new \DateTime("2023-07-16"),
                "Price" => 4.00,
                "Available" => true
            ],
            [
                "Name" => "Bonbons Jelly Beans",
                "Description" => "Sachet de 200g de bonbons Jelly Beans",
                "Stock" => 150,
                "Category" => "Gâteaux et bonbons",
                "ProductType" => "Confiserie",
                "CreatedAt" => new \DateTime("2023-07-01"),
                "UpdatedAt" => new \DateTime("2023-07-16"),
                "Price" => 2.00,
                "Available" => true
            ],
            [
                "Name" => "Gâteau Red Velvet",
                "Description" => "Gâteau Red Velvet de 500g",
                "Stock" => 80,
                "Category" => "Gâteaux et bonbons",
                "ProductType" => "Confiserie",
                "CreatedAt" => new \DateTime("2023-07-01"),
                "UpdatedAt" => new \DateTime("2023-07-16"),
                "Price" => 6.00,
                "Available" => true
            ],
            [
                "Name" => "Bonbons M&M's",
                "Description" => "Sachet de 200g de bonbons M&M's",
                "Stock" => 130,
                "Category" => "Gâteaux et bonbons",
                "ProductType" => "Confiserie",
                "CreatedAt" => new \DateTime("2023-07-01"),
                "UpdatedAt" => new \DateTime("2023-07-16"),
                "Price" => 1.50,
                "Available" => true
            ],
            [
                "Name" => "Gâteau Tiramisu",
                "Description" => "Gâteau Tiramisu de 500g",
                "Stock" => 90,
                "Category" => "Gâteaux et bonbons",
                "ProductType" => "Confiserie",
                "CreatedAt" => new \DateTime("2023-07-01"),
                "UpdatedAt" => new \DateTime("2023-07-16"),
                "Price" => 5.50,
                "Available" => true
            ],
            [
                "Name" => "Bonbons Starburst",
                "Description" => "Sachet de 200g de bonbons Starburst",
                "Stock" => 140,
                "Category" => "Gâteaux et bonbons",
                "ProductType" => "Confiserie",
                "CreatedAt" => new \DateTime("2023-07-01"),
                "UpdatedAt" => new \DateTime("2023-07-16"),
                "Price" => 1.20,
                "Available" => true
            ],
            [
                "Name" => "Gâteau Cheesecake",
                "Description" => "Gâteau Cheesecake de 500g",
                "Stock" => 95,
                "Category" => "Gâteaux et bonbons",
                "ProductType" => "Confiserie",
                "CreatedAt" => new \DateTime("2023-07-01"),
                "UpdatedAt" => new \DateTime("2023-07-16"),
                "Price" => 7.00,
                "Available" => true
            ],
            [
                "Name" => "Bonbons Sour Patch Kids",
                "Description" => "Sachet de 200g de bonbons Sour Patch Kids",
                "Stock" => 150,
                "Category" => "Gâteaux et bonbons",
                "ProductType" => "Confiserie",
                "CreatedAt" => new \DateTime("2023-07-01"),
                "UpdatedAt" => new \DateTime("2023-07-16"),
                "Price" => 1.80,
                "Available" => true
            ],
            
            [
                "Name" => "Pipe Peterson",
                "Description" => "Pipe en bois de la marque Peterson",
                "Stock" => 50,
                "Category" => "Objets divers liés au tabac",
                "ProductType" => "Accessoires",
                "CreatedAt" => new \DateTime("2023-07-01"),
                "UpdatedAt" => new \DateTime("2023-07-16"),
                "Price" => 70.00,
                "Available" => true
            ],
            [
                "Name" => "Cendrier Verre",
                "Description" => "Cendrier en verre de haute qualité",
                "Stock" => 100,
                "Category" => "Objets divers liés au tabac",
                "ProductType" => "Accessoires",
                "CreatedAt" => new \DateTime("2023-07-01"),
                "UpdatedAt" => new \DateTime("2023-07-16"),
                "Price" => 15.00,
                "Available" => true
            ],
            [
                "Name" => "Etui Cigarette Cuir",
                "Description" => "Etui à cigarettes en cuir véritable",
                "Stock" => 75,
                "Category" => "Objets divers liés au tabac",
                "ProductType" => "Accessoires",
                "CreatedAt" => new \DateTime("2023-07-01"),
                "UpdatedAt" => new \DateTime("2023-07-16"),
                "Price" => 25.00,
                "Available" => true
            ],
            [
                "Name" => "Briquet Bic",
                "Description" => "Briquet Bic classique",
                "Stock" => 200,
                "Category" => "Objets divers liés au tabac",
                "ProductType" => "Accessoires",
                "CreatedAt" => new \DateTime("2023-07-01"),
                "UpdatedAt" => new \DateTime("2023-07-16"),
                "Price" => 1.50,
                "Available" => true
            ],
            [
                "Name" => "Zippo Dragon",
                "Description" => "Briquet Zippo gravé avec un dragon",
                "Stock" => 60,
                "Category" => "Objets divers liés au tabac",
                "ProductType" => "Accessoires",
                "CreatedAt" => new \DateTime("2023-07-01"),
                "UpdatedAt" => new \DateTime("2023-07-16"),
                "Price" => 40.00,
                "Available" => true
            ],
            [
                "Name" => "Boîte Allumettes",
                "Description" => "Boîte d'allumettes de taille standard",
                "Stock" => 300,
                "Category" => "Objets divers liés au tabac",
                "ProductType" => "Accessoires",
                "CreatedAt" => new \DateTime("2023-07-01"),
                "UpdatedAt" => new \DateTime("2023-07-16"),
                "Price" => 0.50,
                "Available" => true
            ],
            [
                "Name" => "Grinder Métal",
                "Description" => "Grinder en métal pour tabac",
                "Stock" => 70,
                "Category" => "Objets divers liés au tabac",
                "ProductType" => "Accessoires",
                "CreatedAt" => new \DateTime("2023-07-01"),
                "UpdatedAt" => new \DateTime("2023-07-16"),
                "Price" => 15.00,
                "Available" => true
            ],
            [
                "Name" => "Blague à Tabac",
                "Description" => "Blague à tabac en cuir véritable",
                "Stock" => 85,
                "Category" => "Objets divers liés au tabac",
                "ProductType" => "Accessoires",
                "CreatedAt" => new \DateTime("2023-07-01"),
                "UpdatedAt" => new \DateTime("2023-07-16"),
                "Price" => 20.00,
                "Available" => true
            ],
            [
                "Name" => "Zippo Skull",
                "Description" => "Briquet Zippo gravé avec une tête de mort",
                "Stock" => 65,
                "Category" => "Objets divers liés au tabac",
                "ProductType" => "Accessoires",
                "CreatedAt" => new \DateTime("2023-07-01"),
                "UpdatedAt" => new \DateTime("2023-07-16"),
                "Price" => 45.00,
                "Available" => true
            ],
            
            [
                "Name" => "Pepsi 500ml",
                "Description" => "Bouteille de 500ml de Pepsi",
                "Stock" => 150,
                "Category" => "Boissons",
                "ProductType" => "Sodas",
                "CreatedAt" => new \DateTime("2023-07-01"),
                "UpdatedAt" => new \DateTime("2023-07-16"),
                "Price" => 1.00,
                "Available" => true
            ],
            [
                "Name" => "Sprite 500ml",
                "Description" => "Bouteille de 500ml de Sprite",
                "Stock" => 175,
                "Category" => "Boissons",
                "ProductType" => "Sodas",
                "CreatedAt" => new \DateTime("2023-07-01"),
                "UpdatedAt" => new \DateTime("2023-07-16"),
                "Price" => 1.00,
                "Available" => true
            ],
            [
                "Name" => "Fanta Orange 500ml",
                "Description" => "Bouteille de 500ml de Fanta Orange",
                "Stock" => 160,
                "Category" => "Boissons",
                "ProductType" => "Sodas",
                "CreatedAt" => new \DateTime("2023-07-01"),
                "UpdatedAt" => new \DateTime("2023-07-16"),
                "Price" => 1.00,
                "Available" => true
            ],
            [
                "Name" => "Dr Pepper 500ml",
                "Description" => "Bouteille de 500ml de Dr Pepper",
                "Stock" => 140,
                "Category" => "Boissons",
                "ProductType" => "Sodas",
                "CreatedAt" => new \DateTime("2023-07-01"),
                "UpdatedAt" => new \DateTime("2023-07-16"),
                "Price" => 1.20,
                "Available" => true
            ],
            [
                "Name" => "Evian 500ml",
                "Description" => "Bouteille de 500ml d'eau minérale Evian",
                "Stock" => 250,
                "Category" => "Boissons",
                "ProductType" => "Eau",
                "CreatedAt" => new \DateTime("2023-07-01"),
                "UpdatedAt" => new \DateTime("2023-07-16"),
                "Price" => 0.80,
                "Available" => true
            ],
            [
                "Name" => "Volvic 500ml",
                "Description" => "Bouteille de 500ml d'eau minérale Volvic",
                "Stock" => 220,
                "Category" => "Boissons",
                "ProductType" => "Eau",
                "CreatedAt" => new \DateTime("2023-07-01"),
                "UpdatedAt" => new \DateTime("2023-07-16"),
                "Price" => 0.80,
                "Available" => true
            ],
            [
                "Name" => "Perrier 330ml",
                "Description" => "Bouteille de 330ml d'eau gazeuse Perrier",
                "Stock" => 200,
                "Category" => "Boissons",
                "ProductType" => "Eau",
                "CreatedAt" => new \DateTime("2023-07-01"),
                "UpdatedAt" => new \DateTime("2023-07-16"),
                "Price" => 0.90,
                "Available" => true
            ],
            [
                "Name" => "Red Bull 250ml",
                "Description" => "Canette de 250ml de Red Bull",
                "Stock" => 100,
                "Category" => "Boissons",
                "ProductType" => "Energisant",
                "CreatedAt" => new \DateTime("2023-07-01"),
                "UpdatedAt" => new \DateTime("2023-07-16"),
                "Price" => 2.50,
                "Available" => true
            ],
            [
                "Name" => "Monster Energy 500ml",
                "Description" => "Canette de 500ml de Monster Energy",
                "Stock" => 120,
                "Category" => "Boissons",
                "ProductType" => "Energisant",
                "CreatedAt" => new \DateTime("2023-07-01"),
                "UpdatedAt" => new \DateTime("2023-07-16"),
                "Price" => 2.70,
                "Available" => true
            ]
            
        ];

        foreach ($products as $productData) {
            $product = new Product();
            $product->setName($productData["Name"])
                    ->setDescription($productData["Description"])
                    ->setStock($productData["Stock"])
                    ->setCategory($productData["Category"])
                    ->setProductType($productData["ProductType"])
                    ->setCreatedAt(new DateTime($productData["CreatedAt"]))
                    ->setUpdatedAt(new \DateTimeImmutable($productData["UpdatedAt"]))
                    ->setPrice($productData["Price"])
                    ->setAvailable($productData["Available"]);

            $manager->persist($product);
        }

        $manager->flush();
    }
}

?>
