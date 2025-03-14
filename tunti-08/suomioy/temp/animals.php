<?php

/*

cat, dog, human, parrot, spider. fox

class
object / instanssi
interface
extends

this

*/

interface AnimalInterface
{
    public function die();
    public function isAlive(): bool;

    public function saySomething(): string;

}

abstract class GenericAnimal
{
    private $isAlive = true;

    public function die()
    {
        $this->isAlive = false;
    }

    public function isAlive(): bool
    {
        return $this->isAlive;
    }
}


class Cat extends GenericAnimal implements AnimalInterface
{
    public function saySomething(): string
    {
        return 'miau miau';
    }
}

class Dog extends GenericAnimal implements AnimalInterface
{
    public static function bluu()
    {
        return 'blaa';
    }

    // protected
    public function saySomething(): string
    {
        return 'hau hau';
    }
}

class Human extends GenericAnimal implements AnimalInterface
{
    public function saySomething(): string
    {
        return 'Trump on paras presidentti!';
    }

}


$peksu = new Human();

$stella = new Dog();

Dog::bluu()

var_dump($stella->saySomething());




