<?php


namespace App\Controller;


use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;

class DefaultController extends AbstractController
{

    /* ---- START -- GENERAL USER ROUTES ----- */
    public function indexPage(Request $request) {


        return $this->render('pages/index.html.twig', array(

        ));
    }

    public function myGamesPage(Request $request) {


        return $this->render('pages/my_games.html.twig', array(

        ));
    }

    public function findGames(Request $request) {

        return $this->render('pages/bet/find_games.html.twig', array(

        ));
    }


    public function gamePage(Request $request) {

        return $this->render('pages/game_page.html.twig', array(

        ));
    }
    /* ---- END -- GENERAL USER ROUTES ----- */



    /* ---- ADMIN ROUTES ---- */

    public function adminIndexPage(Request $request) {


        return $this->render('admin/index.html.twig', array(

        ));
    }


    public function loginPage(Request $request) {


        return $this->render('base_auth.html.twig', array(

        ));
    }
}