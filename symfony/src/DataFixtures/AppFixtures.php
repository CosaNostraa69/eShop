<?php

namespace App\DataFixtures;

use App\Entity\Product;
use Doctrine\Common\DataFixtures\DependentFixtureInterface;
use Doctrine\Persistence\ObjectManager;

class AppFixtures extends AbstractFixtures implements DependentFixtureInterface
{
    public function load(ObjectManager $manager): void
    {
        // TODO: Change categories. Use labels defined in category fixtures.
        $products = [
            [
                "Name" => "Marlboro Rouge",
                "Description" => "Paquet de 20 cigarettes Marlboro Rouge",
                "Stock" => 100,
                "ProductType" => "Tabac",
                "CreatedAt" => "2023-07-16",
                "UpdatedAt" => "2023-07-16",
                "Price" => 10.00,
                "Available" => true,
                "Category" => "cigarettes"
            ],
            [
                "Name" => "Camel Bleu",
                "Description" => "Paquet de 20 cigarettes Camel Bleu",
                "Stock" => 80,
                "ProductType" => "Tabac",
                "CreatedAt" => "2023-07-16",
                "UpdatedAt" => "2023-07-16",
                "Price" => 9.50,
                "Available" => true,
                "Category" => "cigarettes"
            ],
            [
                "Name" => "Lucky Strike Original",
                "Description" => "Paquet de 20 cigarettes Lucky Strike Original",
                "Stock" => 70,
                "ProductType" => "Tabac",
                "CreatedAt" => "2023-07-16",
                "UpdatedAt" => "2023-07-16",
                "Price" => 9.00,
                "Available" => true,
                "Category" => "cigarettes"
            ],
            [
                "Name" => "Gauloises Blondes",
                "Description" => "Paquet de 20 cigarettes Gauloises Blondes",
                "Stock" => 90,
                "ProductType" => "Tabac",
                "CreatedAt" => "2023-07-16",
                "UpdatedAt" => "2023-07-16",
                "Price" => 8.50,
                "Available" => true,
                "Category" => "cigarettes"
            ],
            [
                "Name" => "Dunhill International",
                "Description" => "Paquet de 20 cigarettes Dunhill International",
                "Stock" => 60,
                "ProductType" => "Tabac",
                "CreatedAt" => "2023-07-16",
                "UpdatedAt" => "2023-07-16",
                "Price" => 11.00,
                "Available" => true,
                "Category" => "cigarettes"
            ],
            [
                "Name" => "Chesterfield Blue",
                "Description" => "Paquet de 20 cigarettes Chesterfield Blue",
                "Stock" => 75,
                "ProductType" => "Tabac",
                "CreatedAt" => "2023-07-16",
                "UpdatedAt" => "2023-07-16",
                "Price" => 8.50,
                "Available" => true,
                "Category" => "cigarettes"
            ],
            [
                "Name" => "Davidoff Classic",
                "Description" => "Paquet de 20 cigarettes Davidoff Classic",
                "Stock" => 65,
                "ProductType" => "Tabac",
                "CreatedAt" => "2023-07-16",
                "UpdatedAt" => "2023-07-16",
                "Price" => 10.50,
                "Available" => true,
                "Category" => "cigarettes"
            ],
            [
                "Name" => "Winston Red",
                "Description" => "Paquet de 20 cigarettes Winston Red",
                "Stock" => 85,
                "ProductType" => "Tabac",
                "CreatedAt" => "2023-07-16",
                "UpdatedAt" => "2023-07-16",
                "Price" => 9.00,
                "Available" => true,
                "Category" => "cigarettes"
            ],
            [
                "Name" => "Pall Mall Red",
                "Description" => "Paquet de 20 cigarettes Pall Mall Red",
                "Stock" => 80,
                "ProductType" => "Tabac",
                "CreatedAt" => "2023-07-16",
                "UpdatedAt" => "2023-07-16",
                "Price" => 8.00,
                "Available" => true,
                "Category" => "cigarettes"
            ],
            [
                "Name" => "Kent Blue",
                "Description" => "Paquet de 20 cigarettes Kent Blue",
                "Stock" => 95,
                "ProductType" => "Tabac",
                "CreatedAt" => "2023-07-16",
                "UpdatedAt" => "2023-07-16",
                "Price" => 9.50,
                "Available" => true,
                "Category" => "cigarettes"
            ],
            [
                "Name" => "Le Figaro",
                "Description" => "Edition quotidienne du journal Le Figaro",
                "Stock" => 45,
                "ProductType" => "Presse",
                "CreatedAt" => "2023-07-16",
                "UpdatedAt" => "2023-07-16",
                "Price" => 2.70,
                "Available" => true,
                "Category" => "cigarettes"
            ],
            [
                "Name" => "Liberation",
                "Description" => "Edition quotidienne du journal Liberation",
                "Stock" => 30,
                "ProductType" => "Presse",
                "CreatedAt" => "2023-07-16",
                "UpdatedAt" => "2023-07-16",
                "Price" => 2.20,
                "Available" => true,
                "Category" => "cigarettes"
            ],
            [
                "Name" => "Le Parisien",
                "Description" => "Edition quotidienne du journal Le Parisien",
                "Stock" => 50,
                "ProductType" => "Presse",
                "CreatedAt" => "2023-07-16",
                "UpdatedAt" => "2023-07-16",
                "Price" => 2.30,
                "Available" => true,
                "Category" => "cigarettes"
            ],
            [
                "Name" => "L'Equipe",
                "Description" => "Edition quotidienne du journal L'Equipe",
                "Stock" => 55,
                "ProductType" => "Presse",
                "CreatedAt" => "2023-07-16",
                "UpdatedAt" => "2023-07-16",
                "Price" => 2.00,
                "Available" => true,
                "Category" => "cigarettes"
            ],
            [
                "Name" => "Les Echos",
                "Description" => "Edition quotidienne du journal Les Echos",
                "Stock" => 40,
                "ProductType" => "Presse",
                "CreatedAt" => "2023-07-16",
                "UpdatedAt" => "2023-07-16",
                "Price" => 3.00,
                "Available" => true,
                "Category" => "cigarettes"
            ],
            [
                "Name" => "Le Canard Enchainé",
                "Description" => "Edition hebdomadaire du journal Le Canard Enchainé",
                "Stock" => 60,
                "ProductType" => "Presse",
                "CreatedAt" => "2023-07-16",
                "UpdatedAt" => "2023-07-16",
                "Price" => 1.50,
                "Available" => true,
                "Category" => "cigarettes"
            ],
            [
                "Name" => "Charlie Hebdo",
                "Description" => "Edition hebdomadaire du journal Charlie Hebdo",
                "Stock" => 65,
                "ProductType" => "Presse",
                "CreatedAt" => "2023-07-16",
                "UpdatedAt" => "2023-07-16",
                "Price" => 2.00,
                "Available" => true,
                "Category" => "cigarettes"
            ],
            [
                "Name" => "L'Obs",
                "Description" => "Edition hebdomadaire du magazine L'Obs",
                "Stock" => 70,
                "ProductType" => "Presse",
                "CreatedAt" => "2023-07-16",
                "UpdatedAt" => "2023-07-16",
                "Price" => 3.50,
                "Available" => true,
                "Category" => "cigarettes"
            ],
            [
                "Name" => "Paris Match",
                "Description" => "Edition hebdomadaire du magazine Paris Match",
                "Stock" => 75,
                "ProductType" => "Presse",
                "CreatedAt" => "2023-07-16",
                "UpdatedAt" => "2023-07-16",
                "Price" => 4.00,
                "Available" => true,
                "Category" => "cigarettes"
            ],

            [
                "Name" => "Bonbons Haribo",
                "Description" => "Sachet de 200g de bonbons Haribo",
                "Stock" => 150,
                "ProductType" => "Confiserie",
                "CreatedAt" => "2023-07-01T00:00:00Z",
                "UpdatedAt" => "2023-07-16T00:00:00Z",
                "Price" => 1.50,
                "Available" => true,
                "Category" => "cigarettes"
            ],
            [
                "Name" => "Bonbons Skittles",
                "Description" => "Sachet de 200g de bonbons Skittles",
                "Stock" => 120,
                "ProductType" => "Confiserie",
                "CreatedAt" => "2023-07-16",
                "UpdatedAt" => "2023-07-16",
                "Price" => 1.70,
                "Available" => true,
                "Category" => "cigarettes"
            ],
            [
                "Name" => "Gâteau Choco Nuts",
                "Description" => "Gâteau au chocolat et aux noix de 500g",
                "Stock" => 100,
                "ProductType" => "Confiserie",
                "CreatedAt" => "2023-07-16",
                "UpdatedAt" => "2023-07-16",
                "Price" => 4.00,
                "Available" => true,
                "Category" => "cigarettes"
            ],
            [
                "Name" => "Bonbons Jelly Beans",
                "Description" => "Sachet de 200g de bonbons Jelly Beans",
                "Stock" => 150,
                "ProductType" => "Confiserie",
                "CreatedAt" => "2023-07-16",
                "UpdatedAt" => "2023-07-16",
                "Price" => 2.00,
                "Available" => true,
                "Category" => "cigarettes"
            ],
            [
                "Name" => "Gâteau Red Velvet",
                "Description" => "Gâteau Red Velvet de 500g",
                "Stock" => 80,
                "ProductType" => "Confiserie",
                "CreatedAt" => "2023-07-16",
                "UpdatedAt" => "2023-07-16",
                "Price" => 6.00,
                "Available" => true,
                "Category" => "cigarettes"
            ],
            [
                "Name" => "Bonbons M&M's",
                "Description" => "Sachet de 200g de bonbons M&M's",
                "Stock" => 130,
                "ProductType" => "Confiserie",
                "CreatedAt" => "2023-07-16",
                "UpdatedAt" => "2023-07-16",
                "Price" => 1.50,
                "Available" => true,
                "Category" => "cigarettes"
            ],
            [
                "Name" => "Gâteau Tiramisu",
                "Description" => "Gâteau Tiramisu de 500g",
                "Stock" => 90,
                "ProductType" => "Confiserie",
                "CreatedAt" => "2023-07-16",
                "UpdatedAt" => "2023-07-16",
                "Price" => 5.50,
                "Available" => true,
                "Category" => "cigarettes"
            ],
            [
                "Name" => "Bonbons Starburst",
                "Description" => "Sachet de 200g de bonbons Starburst",
                "Stock" => 140,
                "ProductType" => "Confiserie",
                "CreatedAt" => "2023-07-16",
                "UpdatedAt" => "2023-07-16",
                "Price" => 1.20,
                "Available" => true,
                "Category" => "cigarettes"
            ],
            [
                "Name" => "Gâteau Cheesecake",
                "Description" => "Gâteau Cheesecake de 500g",
                "Stock" => 95,
                "ProductType" => "Confiserie",
                "CreatedAt" => "2023-07-16",
                "UpdatedAt" => "2023-07-16",
                "Price" => 7.00,
                "Available" => true,
                "Category" => "cigarettes"
            ],
            [
                "Name" => "Bonbons Sour Patch Kids",
                "Description" => "Sachet de 200g de bonbons Sour Patch Kids",
                "Stock" => 150,
                "ProductType" => "Confiserie",
                "CreatedAt" => "2023-07-16",
                "UpdatedAt" => "2023-07-16",
                "Price" => 1.80,
                "Available" => true,
                "Category" => "cigarettes"
            ],
            [
                "Name" => "Pipe Peterson",
                "Description" => "Pipe en bois de la marque Peterson",
                "Stock" => 50,
                "ProductType" => "Accessoires",
                "CreatedAt" => "2023-07-16",
                "UpdatedAt" => "2023-07-16",
                "Price" => 70.00,
                "Available" => true,
                "Category" => "cigarettes"
            ],
            [
                "Name" => "Cendrier Verre",
                "Description" => "Cendrier en verre de haute qualité",
                "Stock" => 100,
                "ProductType" => "Accessoires",
                "CreatedAt" => "2023-07-16",
                "UpdatedAt" => "2023-07-16",
                "Price" => 15.00,
                "Available" => true,
                "Category" => "cigarettes"
            ],
            [
                "Name" => "Etui Cigarette Cuir",
                "Description" => "Etui à cigarettes en cuir véritable",
                "Stock" => 75,
                "ProductType" => "Accessoires",
                "CreatedAt" => "2023-07-16",
                "UpdatedAt" => "2023-07-16",
                "Price" => 25.00,
                "Available" => true,
                "Category" => "cigarettes"
            ],
            [
                "Name" => "Briquet Bic",
                "Description" => "Briquet Bic classique",
                "Stock" => 200,
                "ProductType" => "Accessoires",
                "CreatedAt" => "2023-07-16",
                "UpdatedAt" => "2023-07-16",
                "Price" => 1.50,
                "Available" => true,
                "Category" => "cigarettes"
            ],
            [
                "Name" => "Zippo Dragon",
                "Description" => "Briquet Zippo gravé avec un dragon",
                "Stock" => 60,
                "ProductType" => "Accessoires",
                "CreatedAt" => "2023-07-16",
                "UpdatedAt" => "2023-07-16",
                "Price" => 40.00,
                "Available" => true,
                "Category" => "cigarettes"
            ],
            [
                "Name" => "Boîte Allumettes",
                "Description" => "Boîte d'allumettes de taille standard",
                "Stock" => 300,
                "ProductType" => "Accessoires",
                "CreatedAt" => "2023-07-16",
                "UpdatedAt" => "2023-07-16",
                "Price" => 0.50,
                "Available" => true,
                "Category" => "cigarettes"
            ],
            [
                "Name" => "Grinder Métal",
                "Description" => "Grinder en métal pour tabac",
                "Stock" => 70,
                "ProductType" => "Accessoires",
                "CreatedAt" => "2023-07-16",
                "UpdatedAt" => "2023-07-16",
                "Price" => 15.00,
                "Available" => true,
                "Category" => "cigarettes"
            ],
            [
                "Name" => "Blague à Tabac",
                "Description" => "Blague à tabac en cuir véritable",
                "Stock" => 85,
                "ProductType" => "Accessoires",
                "CreatedAt" => "2023-07-16",
                "UpdatedAt" => "2023-07-16",
                "Price" => 20.00,
                "Available" => true,
                "Category" => "cigarettes"
            ],
            [
                "Name" => "Zippo Skull",
                "Description" => "Briquet Zippo gravé avec une tête de mort",
                "Stock" => 65,
                "ProductType" => "Accessoires",
                "CreatedAt" => "2023-07-16",
                "UpdatedAt" => "2023-07-16",
                "Price" => 45.00,
                "Available" => true,
                "Category" => "cigarettes"
            ],
            [
                "Name" => "Pepsi 500ml",
                "Description" => "Bouteille de 500ml de Pepsi",
                "Stock" => 150,
                "ProductType" => "Sodas",
                "CreatedAt" => "2023-07-16",
                "UpdatedAt" => "2023-07-16",
                "Price" => 1.00,
                "Available" => true,
                "Category" => "cigarettes"
            ],
            [
                "Name" => "Sprite 500ml",
                "Description" => "Bouteille de 500ml de Sprite",
                "Stock" => 175,
                "ProductType" => "Sodas",
                "CreatedAt" => "2023-07-16",
                "UpdatedAt" => "2023-07-16",
                "Price" => 1.00,
                "Available" => true,
                "Category" => "cigarettes"
            ],
            [
                "Name" => "Fanta Orange 500ml",
                "Description" => "Bouteille de 500ml de Fanta Orange",
                "Stock" => 160,
                "ProductType" => "Sodas",
                "CreatedAt" => "2023-07-16",
                "UpdatedAt" => "2023-07-16",
                "Price" => 1.00,
                "Available" => true,
                "Category" => "cigarettes"
            ],
            [
                "Name" => "Dr Pepper 500ml",
                "Description" => "Bouteille de 500ml de Dr Pepper",
                "Stock" => 140,
                "ProductType" => "Sodas",
                "CreatedAt" => "2023-07-16",
                "UpdatedAt" => "2023-07-16",
                "Price" => 1.20,
                "Available" => true,
                "Category" => "cigarettes"
            ],
            [
                "Name" => "Evian 500ml",
                "Description" => "Bouteille de 500ml d'eau minérale Evian",
                "Stock" => 250,
                "ProductType" => "Eau",
                "CreatedAt" => "2023-07-16",
                "UpdatedAt" => "2023-07-16",
                "Price" => 0.80,
                "Available" => true,
                "Category" => "cigarettes"
            ],
            [
                "Name" => "Volvic 500ml",
                "Description" => "Bouteille de 500ml d'eau minérale Volvic",
                "Stock" => 220,
                "ProductType" => "Eau",
                "CreatedAt" => "2023-07-16",
                "UpdatedAt" => "2023-07-16",
                "Price" => 0.80,
                "Available" => true,
                "Category" => "cigarettes"
            ],
            [
                "Name" => "Perrier 330ml",
                "Description" => "Bouteille de 330ml d'eau gazeuse Perrier",
                "Stock" => 200,
                "ProductType" => "Eau",
                "CreatedAt" => "2023-07-16",
                "UpdatedAt" => "2023-07-16",
                "Price" => 0.90,
                "Available" => true,
                "Category" => "cigarettes"
            ],
            [
                "Name" => "Red Bull 250ml",
                "Description" => "Canette de 250ml de Red Bull",
                "Stock" => 100,
                "ProductType" => "Energisant",
                "CreatedAt" => "2023-07-16",
                "UpdatedAt" => "2023-07-16",
                "Price" => 2.50,
                "Available" => true,
                "Category" => "cigarettes"
            ],
            [
                "Name" => "Monster Energy 500ml",
                "Description" => "Canette de 500ml de Monster Energy",
                "Stock" => 120,
                "ProductType" => "Energisant",
                "CreatedAt" => "2023-07-16",
                "UpdatedAt" => "2023-07-16",
                "Price" => 2.70,
                "Available" => true,
                "Category" => "cigarettes"
            ]
        ];

        foreach ($products as $productData) {
            $product = new Product();
            $product->setName($productData["Name"])
                ->setDescription($productData["Description"])
                ->setStock($productData["Stock"])
                ->setProductType($productData["ProductType"])
                ->setCreatedAt(new \DateTime($productData["CreatedAt"]))
                ->setUpdatedAt(new \DateTime($productData["UpdatedAt"]))
                ->setPrice($productData["Price"])
                ->setAvailable($productData["Available"])
                ->setCategory($this->getReference('category_' . $productData['Category']));

            $manager->persist($product);
        }

        $manager->flush();
    }

    public function getDependencies()
    {
        return [
            CategoryFixtures::class,
        ];
    }
}