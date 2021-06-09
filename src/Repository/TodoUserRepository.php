<?php

namespace App\Repository;

use App\Entity\TodoUser;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method TodoUser|null find($id, $lockMode = null, $lockVersion = null)
 * @method TodoUser|null findOneBy(array $criteria, array $orderBy = null)
 * @method TodoUser[]    findAll()
 * @method TodoUser[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class TodoUserRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, TodoUser::class);
    }

    // /**
    //  * @return TodoUser[] Returns an array of TodoUser objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('t')
            ->andWhere('t.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('t.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?TodoUser
    {
        return $this->createQueryBuilder('t')
            ->andWhere('t.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
