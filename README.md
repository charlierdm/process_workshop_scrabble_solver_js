# process_workshop_scrabble_solver_js

<img src="https://user-images.githubusercontent.com/75075773/116895365-0907a800-ac2b-11eb-9188-046e9dde653d.jpg" width="500"/>

This is my solution for the Makers Academy Scrabble_Solver Process Workshop written in JavaScript, test driven using Jasmine. All tests are passing.


#### Requirements

Given a word, compute the scrabble score for that word.

Letter Values

| Letter      | Value | 
| :---        |    :----:   |       
| A, E, I, O, U, L, N, R, S, T      | 1      | 
| D, G   | 2        | 
| B, C, M, P | 3 |
| F, H, V, W, Y | 4 |
| K | 5 |
| J, X | 8 |
| Q, Z | 10 |

```

Examples "cabbage" should be scored as worth 14 points:

3 points for C  
1 point for A, twice  
3 points for B, twice  
2 points for G  
1 point for E  
And to total:

3 + 2x1 + 2x3 + 2 + 1

= 3 + 2 + 6 + 3

= 14

```

#### Acceptance Criteria

```

scrabble = Scrabble.new('')
scrabble.score # => 0

scrabble = Scrabble.new(" \t\n")
scrabble.score # => 0

scrabble = Scrabble.new(nil)
scrabble.score # => 0

scrabble = Scrabble.new('a')
scrabble.score # => 1

scrabble = Scrabble.new('f')
scrabble.score # => 4

scrabble = Scrabble.new('street')
scrabble.score # => 6

scrabble = Scrabble.new('quirky')
scrabble.score # => 22

scrabble = Scrabble.new('OXYPHENBUTAZONE')
scrabble.score # => 41
```
