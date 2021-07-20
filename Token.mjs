//package com.Math;

/*public*/ class Token {
  /*public TokenType*/ Type;
  /*public String*/ Value;
  /*public*/ constructor(/*TokenType*/ type, /*String*/ value) {
    this.Type = type;
    this.Value = value;
  }

  /*@Override*/
  /*public String*/ toString() {
    return this.Type.toString()+":"+this.Value;
  }

  /*Object*/ clone() {
    return new this.constructor(this.Type,this.Value);
  }

  /*GetNode() {
    return this.Type.GetNode(this);
  }*/
}

export default Token;
