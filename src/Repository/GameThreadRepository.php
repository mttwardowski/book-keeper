<?php

namespace App\Repository;

use App\Entity\Game;
use App\Entity\GameThread;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
 * @method GameThread|null find($id, $lockMode = null, $lockVersion = null)
 * @method GameThread|null findOneBy(array $criteria, array $orderBy = null)
 * @method GameThread[]    findAll()
 * @method GameThread[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class GameThreadRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, GameThread::class);
    }

    // /**
    //  * @return GameThread[] Returns an array of GameThread objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('g')
            ->andWhere('g.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('g.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */


    public function getThreadsByGame(Game $game)
    {
        return $this->createQueryBuilder('g')
            ->andWhere('g.game = :game')
            ->setParameter('game', $game)
            ->orderBy('g.dateCreated', 'DESC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
            ;
    }


    /*
    public function findOneBySomeField($value): ?GameThread
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
