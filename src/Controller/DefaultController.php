<?php


namespace App\Controller;


use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;

class DefaultController extends AbstractController
{

    public function indexPage(Request $request) {


        return $this->render('pages/index.html.twig', array(

        ));
    }


    public function myGamesPage(Request $request) {


        return $this->render('pages/my_games.html.twig', array(

        ));
    }
}