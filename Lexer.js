//Lexer class, does the first calculation.
//Also this is some java stuff left here.

//package com.Math;

//import java.util.ArrayList;
import TokenType from "./TokenType.js";
import Token from "./Token.js";

class Lexer {
  static Ignored = [' '];

  /*constructor() {

  }*/

  static List = [['0','1','2','3','4','5','6','7','8','9','.'],['+','-','*','/','%'],['(',')'],['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'],['='],[',']];
  static Rule = [false,false,true,false,false,false];
  //Split rule, defines if two chars together should be split into separate nodes.

  static /*ArrayList<Token>*/ Parse(/*String*/ str) {
    let Out = [];
    let t = null;//tokentype
    let Value = "";

    let CharContains = this.CharContains;
    for (/*int*/ let i = 0; i < str.length; i++) {
      /*char*/ let c = str.charAt(i);
      if (CharContains(c,this.Ignored)) {continue;}
      if (t==null) {
        this.List.forEach(function (a,index) {
          if (CharContains(c,a) ) {t = TokenType.values()[index];Value += c;}
        } );
      } else {
        /*boolean*/ let v = CharContains(c,this.List[t.ordinal()]);
        if ((!v)||(this.Rule[t.ordinal()]) ) {i-=1;Out = Out.concat(new Token(t,Value));Value = "";t = null;continue;} else {Value += c;}
      }

    }
    Out = Out.concat(new Token(t,Value));
    return Out;
  }

  static /*boolean*/ CharContains(/*char*/ c, /*char[]*/ d) {
    let ret = false;
    d.forEach((e, i) => {
      if (c==e) {ret = true;}
    });

    return ret;
  }
}

Lexer.Parse.bind(Lexer);

export default Lexer;
