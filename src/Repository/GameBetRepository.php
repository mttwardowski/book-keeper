<?php

namespace App\Repository;

use App\Entity\GameBet;
use App\Entity\User;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
 * @method GameBet|null find($id, $lockMode = null, $lockVersion = null)
 * @method GameBet|null findOneBy(array $criteria, array $orderBy = null)
 * @method GameBet[]    findAll()
 * @method GameBet[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class GameBetRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, GameBet::class);
    }

    /**
    * @return GameBet[] Returns an array of GameBet objects
    */
    public function getAllGameBets()
    {
        return $this->createQueryBuilder('g')
            ->andWhere('g.pick = 1')
            ->orderBy('g.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }

    /**
     * @return GameBet[] Returns an array of GameBet objects
     */
    public function getGameBetsByUser(User $user)
    {
        return $this->createQueryBuilder('g')
            ->andWhere('g.exampleField = :val')
            ->setParameter('val', $user)
            ->orderBy('g.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
            ;
    }


    /**
     * @return GameBet[] Returns an array of GameBet objects
     */
    public function getMyRecentGameBets(User $user)
    {
        return $this->createQueryBuilder('g')
            ->andWhere('g.user = :val')
            ->setParameter('val', $user)
            ->orderBy('g.id', 'DESC')
            ->setMaxResults(3)
            ->getQuery()
            ->getResult()
            ;
    }


    /*
    public function findOneBySomeField($value): ?GameBet
    {
        return $this->createQueryBuilder('g')
            ->andWhere('g.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
