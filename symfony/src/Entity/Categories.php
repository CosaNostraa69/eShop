<?php

namespace App\Entity;

use ApiPlatform\Metadata\ApiResource;
use App\Repository\CategoriesRepository;
use Doctrine\ORM\Mapping as ORM;
use ApiPlatform\Metadata\GetCollection;
use ApiPlatform\Metadata\Tests\Fixtures\Metadata\Get;
use Symfony\Component\Serializer\Annotation\Groups;


#[ORM\Entity(repositoryClass: CategoriesRepository::class)]
#[ApiResource(
    operations:[
        new GetCollection(
            normalizationContext:['groups' => ['categories_read']]
        ),
        new Get(
            normalizationContext:['groups' => ['category_read']]
        )
    ]
)]
class Categories
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    #[Groups(['categories_read', 'category_read'])]  // Groupes corrects

    private ?int $id = null;

    #[ORM\Column(length: 100)]
    #[Groups(['categories_read', 'category_read', 'product_read'])] 
    private ?string $name = null;
    

    public function __toString(): string
    {
        return $this->name ?? '';
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): self   // Changé "static" en "self"
    {
        $this->name = $name;

        return $this;
    }
}
