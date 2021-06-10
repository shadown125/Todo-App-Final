<?php

namespace App\Repository;

use App\Entity\DoneTodo;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method DoneTodo|null find($id, $lockMode = null, $lockVersion = null)
 * @method DoneTodo|null findOneBy(array $criteria, array $orderBy = null)
 * @method DoneTodo[]    findAll()
 * @method DoneTodo[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class DoneTodoRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, DoneTodo::class);
    }

    // /**
    //  * @return DoneTodo[] Returns an array of DoneTodo objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('d')
            ->andWhere('d.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('d.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?DoneTodo
    {
        return $this->createQueryBuilder('d')
            ->andWhere('d.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
