//package com.Math;

import * as node1 from "./Nodes/AssignNode.js";
import * as node2 from "./Nodes/CommaNode.js";
import * as node3 from "./Nodes/NumberNode.js";
import * as node4 from "./Nodes/OperatorNode.js";
import * as node5 from "./Nodes/ParenthesisNode.js";
import * as node6 from "./Nodes/VariableNode.js";

/*enum*/ class TokenType {
  static ValueList = ["Number","Operator","Parenthesis","Variable","Assign","Comma"];
  //static NodeList = [node3,node4,node5,node6,node1,node2];
  static EnumList = [];

  static Get(str) {
    var ret = -1;
    this.ValueList.forEach((item, i) => {
      if (str==item) {ret = i;}
    });
    return new this(ret);
    //return new this(this.ValueList.find(element => element==str) );
  }

  static values() {
    return this.EnumList;
  }

  /*GetNode() {
    return this.NodeList[this.Value];
  }*/

  ordinal() {
    return this.Value;
  }
  Value = -1;
  constructor(ordinal) {
    this.Value = ordinal;
  }
  toString() {
    return this.constructor.ValueList[this.Value];
  }


}

for (let i = 0; i < TokenType.ValueList.length;i++) {
  TokenType.EnumList[i] = new TokenType(i);
}


export default TokenType;
