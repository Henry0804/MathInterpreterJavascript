//package com.Math.Nodes;

//import com.Math.Node;
//import com.Math.Token;

//import java.util.ArrayList;
//import java.util.HashMap;

/*public*/ export default class CommaNode /*implements Node*/ {
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
    return Float.parseFloat(OperationToken.Value);
  }

  /*@Override
  public String*/ toString() {
    if (this.OperationToken == null) {
      return "CommaNode{ERROR}";
    }
    return "CommaNode{" + OperationToken.Value + "}";
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
