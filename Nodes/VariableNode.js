//package com.Math.Nodes;

//import com.Math.Node;
//import com.Math.Token;
//import com.Math.TokenType;

//import java.util.ArrayList;
//import java.util.HashMap;

export default /*public*/ class VariableNode /*implements Node*/ {
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
    if (vars.get(this.OperationToken.Value) != null) {
      /*float*/ let val = vars.get(this.OperationToken.Value);
      if (this.InvertOutput) {
        val = -val;
      }
      ;
      return val;
    }
    return 0;
  }

  /*@Override
  public String*/ toString() {
    if (this.OperationToken == null) {
      return "VarNode{ERROR}";
    }
    return "VarNode{" + this.OperationToken.Value + "}";
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
