//package com.Math.Nodes;

//import com.Math.Node;
//import com.Math.Token;
//import com.Math.TokenType;

//import java.util.ArrayList;
//import java.util.HashMap;

import Token from "../Token.mjs";
import TokenType from "../TokenType.mjs";

/*public*/ export default class OperatorNode /*implements Node*/ {
  /*public Token*/ OperationToken = new Token(TokenType.Get("Operator"), "_");
  /*public Node*/ LeftNode = null;
  /*public Node*/ RightNode = null;

  /*public*/ constructor(/*Token*/ tok, /*Node*/ leftNode, /*Node*/ rightNode) {
    this.OperationToken = tok;
    this.LeftNode = leftNode;
    this.RightNode = rightNode;

  }

  /*@Override
  public Token*/ GetToken() {
    return this.OperationToken;
  }

  /*@Override
  public ArrayList<Node>*/ GetNodes() {
    return null;
  }

  /*public*/ OperatorNode(/*Token*/ tok) {
    this.OperationToken = tok;

  }

  /*public static float*/ factorial(/*float*/ n2) {
    /*float*/ fact = 1;
    /*int*/ n = Math.round(n2);
    for (/*int*/ i = 2; i <= n; i++) {
      fact = fact * i;
    }
    return fact;
  }

  /*public @Override
  float*/ QuickParse(/*HashMap<String, Float>*/ vars) {

    if (!this.InvertOutput) {

      switch (this.OperationToken.Value) {
        case "+":
          return this.LeftNode.QuickParse(vars) + this.RightNode.QuickParse(vars);
        case "-":
          return this.LeftNode.QuickParse(vars) - this.RightNode.QuickParse(vars);
        case "*":
        return this.LeftNode.QuickParse(vars) * this.RightNode.QuickParse(vars);
        case "/":
          return this.LeftNode.QuickParse(vars) / this.RightNode.QuickParse(vars);
        case "**":
          return Math.pow(this.LeftNode.QuickParse(vars), this.RightNode.QuickParse(vars));
        case "%":
          return (this.LeftNode.QuickParse(vars) % this.RightNode.QuickParse(vars));
        case "+-":
          return this.LeftNode.QuickParse(vars) + -this.RightNode.QuickParse(vars);
        case "--":
          return this.LeftNode.QuickParse(vars) - -this.RightNode.QuickParse(vars);
        case "*-":
          return this.LeftNode.QuickParse(vars) * -this.RightNode.QuickParse(vars);
        case "/-":
          return this.LeftNode.QuickParse(vars) + -this.RightNode.QuickParse(vars);
        case "%-":
          return this.LeftNode.QuickParse(vars) % -this.RightNode.QuickParse(vars);
      }

    } else {
      switch (this.OperationToken.Value) {
        case "+":
          return -this.LeftNode.QuickParse(vars) + this.RightNode.QuickParse(vars);
        case "-":
          return -this.LeftNode.QuickParse(vars) - this.RightNode.QuickParse(vars);
        case "*":
          return -this.LeftNode.QuickParse(vars) * this.RightNode.QuickParse(vars);
        case "/":
          return -this.LeftNode.QuickParse(vars) / this.RightNode.QuickParse(vars);
        case "**":
          return -Math.pow(this.LeftNode.QuickParse(vars), this.RightNode.QuickParse(vars));
        case "%":
          return -(this.LeftNode.QuickParse(vars) % this.RightNode.QuickParse(vars));
      }
    }
    return 0;
  }

  /*@Override
  public String*/ toString() {
    //if (LeftNode==null||RightNode==null||OperationToken!=null) {return "OperatorNode{"+OperationToken+"}";}
    //if (LeftNode==null||RightNode==null||OperationToken==null) {return "OperatorNode{ERROR}";}
    if (this.LeftNode == null || this.RightNode == null) {
      return "OperatorNode{" + this.OperationToken.Value + "}";
    } else {
      return "OperatorNode{" + this.LeftNode.toString() + "," + this.OperationToken.Value + "," + this.RightNode.toString() + "}";
    }

  }

  /*private boolean*/ InvertOutput = false;

  /*@Override
  public boolean*/ GetInvert() {
    return this.InvertOutput;
  }

  /*@Override
  public void*/ SetInvert(/*boolean*/ v) {
    this.InvertOutput = v;
  }
}
