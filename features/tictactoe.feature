
Feature: TicTacToe game

  In order to play the TicTacToe game
  As a board game player Alice
  Alice wants to see if she can become the winner

  Background:
    Given Alice is at the TicTacToe
@test
  Scenario: Able to see who is the winner
    When she make the move on the board 
     | move     |
     | 1,3,4,7  |
    Then she should able to see the winner
  

  