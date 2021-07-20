//package com.Math.Nodes;

//import com.Math.Node;
//import com.Math.Token;
//import com.Math.TokenType;

//import java.util.ArrayList;
//import java.util.HashMap;

/*public*/ export default class NumberNode /*implements Node*/ {
  /*public Token*/ OperationToken = null;

  /*public*/ constructor(/*Token*/ tok) {
    this.OperationToken = tok;

  }

  /*@Override
  public Token*/ GetToken() {
    return this.OperationToken;
  }

  /*@Override
  public ArrayList<Node>*/ GetNodes() {
    return null;
  }

  /*public @Override
  float*/ QuickParse(/*HashMap<String, Float>*/ vars) {
    /*float*/ let val = parseFloat(this.OperationToken.Value);
    if (this.InvertOutput) {
      val = -val;
    }
    return val;
  }

  /*@Override
  public String*/ toString() {
    if (this.OperationToken == null) {
      return "NumberNode{ERROR}";
    }
    if (this.InvertOutput) {return "NumberNode{-" + OperationToken.Value + "}";} else {
      return "NumberNode{" + OperationToken.Value + "}";
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
