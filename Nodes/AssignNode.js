//package com.Math.Nodes;

//import com.Math.Node;
//import com.Math.Token;

//import java.util.ArrayList;
//import java.util.HashMap;

/*public*/ export default class AssignNode /*implements Node*/ {
  /*public Token*/ OperationToken = null;
  /*Node*/ LeftNode = null;
  /*Node*/ RightNode = null;

  /*public*/ constructor(/*Token*/ tok, /*Node*/ left, /*Node*/ right) {
    this.OperationToken = tok;
    this.LeftNode = left;
    this.RightNode = right;

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
    /*float*/ val = this.RightNode.QuickParse(vars);
    vars.remove(this.LeftNode.GetToken().Value);
    vars.put(this.LeftNode.GetToken().Value, val);
    if (this.InvertOutput) {
      val = -val;
    }
    return val;
  }

  /*@Override
  public String*/ toString() {
    if (this.OperationToken == null) {
      return "AssignNode{ERROR}";
    }
    return "AssignNode{" + OperationToken.Value + "}";
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
