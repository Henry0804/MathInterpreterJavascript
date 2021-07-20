//package com.Math;

//import com.Math.Nodes.*;


import TokenType from "./TokenType.js";
import Token from "./Token.js";

import AssignNode from "./Nodes/AssignNode.js";
import CommaNode from "./Nodes/CommaNode.js";
import NumberNode from "./Nodes/NumberNode.js";
import OperatorNode from "./Nodes/OperatorNode.js";
import ParenthesisNode from "./Nodes/ParenthesisNode.js";
import VariableNode from "./Nodes/VariableNode.js";

//import java.util.ArrayList;
//import java.util.HashMap;
//import java.util.LinkedList;
//import java.util.List;

/*public*/ export default class Parser {

  /*public ArrayList<Node>*/ static ToNodes(/*ArrayList<Token>*/ Tokens) {
    /*ArrayList<Node>*/ let Out = [];
    for (/*Token*/ let t of Tokens) {

      if (t.Type.Value==TokenType.Get("Number").Value ) {
        Out = Out.concat(new NumberNode(t) );
      } else if (t.Type.Value==TokenType.Get("Operator").Value ) {
        Out = Out.concat(new OperatorNode(t,null,null) );

      } else if (t.Type.Value==TokenType.Get("Parenthesis").Value) {
        Out = Out.concat(new ParenthesisNode(t) );
      } else if (t.Type.Value==TokenType.Get("Variable").Value) {
        Out = Out.concat(new VariableNode(t));
      } else if (t.Type.Value==TokenType.Get("Assign").Value) {
        Out = Out.concat(new AssignNode(t,null,null));
      } else if (t.Type.Value==TokenType.Get("Comma").Value) {
        Out = Out.concat(new CommaNode(t) );
      }


    }

    return Out;

  }

  /*public*/ static /*ArrayList<Node>*/ Parse(/*ArrayList<Node>*/ Nodes) {
    /*
    First fixes negative numbers. (Not everything is fixed though)
    Then converts all parenthesis and loops a bunch of times.
    And also fixes function based stuff.
    After that the program calculates power, factors, expressions, and then assignments aka =.
     */
     return this.ConvertAssignment(this.ConvertExpression(this.ConvertFactors(this.ConvertPow(this.ConvertFunctions(this.ConvertParenthesis(this.FixNegativeNumbers(Nodes)))))));
  }

  /*public*/ static /*void*/ RemoveRange(/*ArrayList<Node>*/ Nodes,/*int*/ start,/*int*/ end) {
    /*int*/ let end2 = end-start;
    for (/*int*/ let i = 0; i < end2; i++) {
      Nodes.splice(start,1);
    }
  }

  /*public*/ static /*ArrayList<Node>*/ ConvertParenthesis(/*ArrayList<Node>*/ Nodes) {
    /*int*/ let depth = 0;
    /*int*/ let start = 0;
    /*boolean*/ let invert = false;
    //ArrayList<String> Values = new ArrayList<>(5);
    for (/*int*/ let i = 0; i < Nodes.length; i++) {
      /*Node*/ let n = Nodes[i];

      /*TokenType*/ let type = n.GetToken().Type;
      /*String*/ let value = n.GetToken().Value;
      if (type.Value==TokenType.Get("Parenthesis").Value&&(value=="(")) {
        depth ++;
        if (depth==1) {
          invert = n.GetInvert();
          start = i;
        }

      } else if (type.Value==TokenType.Get("Parenthesis").Value&&value==")") {

        depth --;
        if (depth==0) {
          /*List<Node>*/ let split = Nodes.splice(start,i);
          ///*ArrayList<Node>*/ let split2 = /*new ArrayList<Node>(*/split;
          //this.RemoveRange(Nodes,start,i);
          //Nodes.splice(start,i-start);
          i = start;
          //invert = n.GetInvert();
          split.shift();
          split.pop();


          /*Node*/ let add = new ParenthesisNode(new Token(TokenType.Get("Parenthesis"),")"),split);
          add.SetInvert(invert);
          Nodes.splice(start,0,add);
        }

      }


    }

    //Now update all parenthesis nodes.
    for (/*int*/ let i = 0; i < Nodes.length; i++) {
      /*Node*/ let n = Nodes[i];
      /*TokenType*/ let type = n.GetToken().Type;
      if (type.Value==TokenType.Get("Parenthesis").Value) {this.Parse(n.GetNodes());}

    }
    return Nodes;
  }

  /*public*/ static /*ArrayList<Node>*/ ConvertPow(/*ArrayList<Node>*/ Nodes) {
    for (/*int*/ let i = 0; i < Nodes.length; i++) {
      /*Node*/ let n = Nodes[i];

      /*TokenType*/ let type = n.GetToken().Type;
      /*String*/ let value = n.GetToken().Value;
      if (type.Value==TokenType.Get("Operator").Value&&(value=="**")) {
        /*Node*/ let left = Nodes.get(i-1);
        /*Node*/ let right = Nodes.get(i+1);
        /*OperatorNode*/ out = new OperatorNode(n.GetToken(),left,right);
        Nodes[i] = out;
        Nodes.splice(i-1,1);
        Nodes.splice(i,1);
        i--;
      }


    }
    return Nodes;
  }

  /*public*/ static /*ArrayList<Node>*/ ConvertFactors(/*ArrayList<Node>*/ Nodes) {
    for (/*int*/ let i = 0; i < Nodes.length; i++) {
      /*Node*/ let n = Nodes[i];

      /*TokenType*/ let type = n.GetToken().Type;
      /*String*/ let value = n.GetToken().Value;
      if (type.Value==TokenType.Get("Operator").Value&&(value=="*" || value=="/" || value=="%"  || value=="%-" || value=="*-" || value=="/-")) {
        /*Node*/ let left = Nodes[i-1];
        /*Node*/ let right = Nodes[i+1];
        /*TokenType.Get("Operator").GetNode()*/ let out = new OperatorNode(n.GetToken(),left,right);
        Nodes[i] = out;
        Nodes.splice(i-1,1);
        Nodes.splice(i,1);
        i--;
      }


    }
    return Nodes;
  }

  /*public*/ static /*ArrayList<Node>*/ ConvertAssignment(/*ArrayList<Node>*/ Nodes) {
    for (/*int*/ let i = 0; i < Nodes.length; i++) {
      /*Node*/ let n = Nodes[i];

      /*TokenType*/ let type = n.GetToken().Type;
      /*String*/ let value = n.GetToken().Value;
      if (type.Value==TokenType.Get("Assign").Value&&(value=="=" )  ) {
        /*Node*/ left = Nodes[i-1];
        /*Node*/ right = Nodes[i+1];
        /*AssignNode*/ out = new AssignNode(n.GetToken(),left,right);
        Nodes[i] = out;
        Nodes.splice(i-1,1);
        Nodes.splice(i,1);
        i--;
      }


    }
    return Nodes;
  }

  /*public*/ static /*ArrayList<Node>*/ FixNegativeNumbers(/*ArrayList<Node>*/ Nodes) {
    for (/*int*/ let i = 0; i < Nodes.length; i++) {
      /*Node*/ let n = Nodes[i];

      /*TokenType*/ let type = n.GetToken().Type;
      /*String*/ let value = n.GetToken().Value;
      /*if (type == TokenType.Operator && (value=="+-") || value=="--") || value=="*-") || value=="/-") || value=="**-"))) {
        //n.GetToken().Value = n.GetToken().Value.substring(0, n.GetToken().Value.length() - 1);
        //Nodes.get(i + 1).GetToken().Value = "-" + Nodes.get(i + 1).GetToken().Value;

      }*/

      if ((i+1)>Nodes.length-1) {continue;}

      /*boolean*/ let and = true;

      if (i>0) {
        and = Nodes[(i + 1)].GetToken().Type.Value!=TokenType.Get("Number").Value && Nodes[i - 1].GetToken().Type.Value!=TokenType.Get("Number").Value;
      } //else {
      //  and = Nodes.get(i + 1).GetToken().Type!=TokenType.Number;
      //}

      if (type == TokenType.Get("Operator") && value=="-" && and ) {
        Nodes.splice(i,1);
        Nodes[i].SetInvert(!Nodes[i].GetInvert());
      }

    }
    return Nodes;
  }

  /*public*/ static /*ArrayList<Node>*/ ConvertFunctions(/*ArrayList<Node>*/ Nodes) {
    for (/*int*/ let i = 0; i < Nodes.length; i++) {
      /*Node*/ let n = Nodes[i];

      /*TokenType*/ let type = n.GetToken().Type;
      /*String*/ let value = n.GetToken().Value;
      if (type.Value == TokenType.Get("Parenthesis").Value) {
        //n.GetToken().Value = n.GetToken().Value.substring(0, n.GetToken().Value.length() - 1);
        //Nodes.get(i + 1).GetToken().Value = "-" + Nodes.get(i + 1).GetToken().Value;
        if (i==0) {continue;}
        if (Nodes[i-1].GetToken().Type.Value!=TokenType.Get("Variable").Value) {continue;}
        n.GetToken().Value = Nodes.get[i-1].GetToken().Value;
        Nodes.splice(i-1,1);
        i--;
      }
    }
    return Nodes;
  }


  /*public*/ static /*ArrayList<Node>*/ ConvertExpression(/*ArrayList<Node>*/ Nodes) {
    for (/*int*/ let i = 0; i < Nodes.length; i++) {
      /*Node*/ let n = Nodes[i];

      /*TokenType*/ let type = n.GetToken().Type;
      /*String*/ let value = n.GetToken().Value;
      if (type.Value==TokenType.Get("Operator").Value&&(value=="+" || value=="-" || value=="--" || value=="+-" ) ) {
        /*Node*/ let left;
        if (i-1==-1) {left = new NumberNode(new Token(TokenType.Get("Number"),"0"));} else {
          left = Nodes[i - 1];
        }
        /*Node*/ let right = Nodes[i+1];
        //if (left.GetToken().Type!=TokenType.Number) {left = new NumberNode(new Token(TokenType.Number,"0"));}
        /*OperatorNode*/ let out = new OperatorNode(n.GetToken(),left,right);
        Nodes[i] = out;
        if (i-1==-1) {Nodes.splice(i,1);Nodes[i].GetToken().Value = "-"+Nodes[i].GetToken().Value;i++;}
        else {
          Nodes.splice(i - 1,1);
          Nodes.splice(i,1);
        }
        i--;
      }


    }
    return Nodes;
  }

  /*public*/ static /*float*/ QuickParse(/*ArrayList<Node>*/ Nodes, /*HashMap<String,Float>*/ vars) {
    return Nodes[0].QuickParse(vars);
  }
}
