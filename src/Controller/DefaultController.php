<?php


namespace App\Controller;


use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;

class DefaultController extends AbstractController
{

    /* ---- START -- GENERAL USER ROUTES ----- */
    public function indexPage(Request $request) {

        $user = $this->getUser();

        $sport = $this->getDoctrine()->getRepository('App:Sport')->find(4);
        $games = $this->getDoctrine()->getRepository('App:Game')->getUpcomingGamesBySport($sport);

        $gameBets = $this->getDoctrine()->getRepository('App:GameBet')->getMyRecentGameBets($user);


        return $this->render('pages/index.html.twig', array(
            'bets'  => $gameBets,
            'games' => $games,
        ));
    }

    public function myGamesPage(Request $request) {


        return $this->render('pages/my_games.html.twig', array(

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