<?php


namespace App\Controller;


use App\Entity\User;
use App\Security\TokenAuthenticator;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Security\Guard\GuardAuthenticatorHandler;

class AuthController extends AbstractController
{

    public function register(TokenAuthenticator $authenticator, GuardAuthenticatorHandler $guardHandler, Request $request)
    {

        $user = new User();

        // after validating the user and saving them to the database
        // authenticate the user and use onAuthenticationSuccess on the authenticator
        return $guardHandler->authenticateUserAndHandleSuccess(
            $user,          // the User object you just created
            $request,
            $authenticator, // authenticator whose onAuthenticationSuccess you want to use
            'main'          // the name of your firewall in security.yaml
        );
    }


}