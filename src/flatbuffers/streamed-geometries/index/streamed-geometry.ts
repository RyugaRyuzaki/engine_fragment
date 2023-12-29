// automatically generated by the FlatBuffers compiler, do not modify

import * as flatbuffers from 'flatbuffers';

export class StreamedGeometry {
  bb: flatbuffers.ByteBuffer|null = null;
  bb_pos = 0;
  __init(i:number, bb:flatbuffers.ByteBuffer):StreamedGeometry {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

static getRootAsStreamedGeometry(bb:flatbuffers.ByteBuffer, obj?:StreamedGeometry):StreamedGeometry {
  return (obj || new StreamedGeometry()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

static getSizePrefixedRootAsStreamedGeometry(bb:flatbuffers.ByteBuffer, obj?:StreamedGeometry):StreamedGeometry {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new StreamedGeometry()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

id():string|null
id(optionalEncoding:flatbuffers.Encoding):string|Uint8Array|null
id(optionalEncoding?:any):string|Uint8Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
}

position(index: number):number|null {
  const offset = this.bb!.__offset(this.bb_pos, 6);
  return offset ? this.bb!.readFloat32(this.bb!.__vector(this.bb_pos + offset) + index * 4) : 0;
}

positionLength():number {
  const offset = this.bb!.__offset(this.bb_pos, 6);
  return offset ? this.bb!.__vector_len(this.bb_pos + offset) : 0;
}

positionArray():Float32Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 6);
  return offset ? new Float32Array(this.bb!.bytes().buffer, this.bb!.bytes().byteOffset + this.bb!.__vector(this.bb_pos + offset), this.bb!.__vector_len(this.bb_pos + offset)) : null;
}

normal(index: number):number|null {
  const offset = this.bb!.__offset(this.bb_pos, 8);
  return offset ? this.bb!.readFloat32(this.bb!.__vector(this.bb_pos + offset) + index * 4) : 0;
}

normalLength():number {
  const offset = this.bb!.__offset(this.bb_pos, 8);
  return offset ? this.bb!.__vector_len(this.bb_pos + offset) : 0;
}

normalArray():Float32Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 8);
  return offset ? new Float32Array(this.bb!.bytes().buffer, this.bb!.bytes().byteOffset + this.bb!.__vector(this.bb_pos + offset), this.bb!.__vector_len(this.bb_pos + offset)) : null;
}

index(index: number):number|null {
  const offset = this.bb!.__offset(this.bb_pos, 10);
  return offset ? this.bb!.readUint32(this.bb!.__vector(this.bb_pos + offset) + index * 4) : 0;
}

indexLength():number {
  const offset = this.bb!.__offset(this.bb_pos, 10);
  return offset ? this.bb!.__vector_len(this.bb_pos + offset) : 0;
}

indexArray():Uint32Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 10);
  return offset ? new Uint32Array(this.bb!.bytes().buffer, this.bb!.bytes().byteOffset + this.bb!.__vector(this.bb_pos + offset), this.bb!.__vector_len(this.bb_pos + offset)) : null;
}

static startStreamedGeometry(builder:flatbuffers.Builder) {
  builder.startObject(4);
}

static addId(builder:flatbuffers.Builder, idOffset:flatbuffers.Offset) {
  builder.addFieldOffset(0, idOffset, 0);
}

static addPosition(builder:flatbuffers.Builder, positionOffset:flatbuffers.Offset) {
  builder.addFieldOffset(1, positionOffset, 0);
}

static createPositionVector(builder:flatbuffers.Builder, data:number[]|Float32Array):flatbuffers.Offset;
/**
 * @deprecated This Uint8Array overload will be removed in the future.
 */
static createPositionVector(builder:flatbuffers.Builder, data:number[]|Uint8Array):flatbuffers.Offset;
static createPositionVector(builder:flatbuffers.Builder, data:number[]|Float32Array|Uint8Array):flatbuffers.Offset {
  builder.startVector(4, data.length, 4);
  for (let i = data.length - 1; i >= 0; i--) {
    builder.addFloat32(data[i]!);
  }
  return builder.endVector();
}

static startPositionVector(builder:flatbuffers.Builder, numElems:number) {
  builder.startVector(4, numElems, 4);
}

static addNormal(builder:flatbuffers.Builder, normalOffset:flatbuffers.Offset) {
  builder.addFieldOffset(2, normalOffset, 0);
}

static createNormalVector(builder:flatbuffers.Builder, data:number[]|Float32Array):flatbuffers.Offset;
/**
 * @deprecated This Uint8Array overload will be removed in the future.
 */
static createNormalVector(builder:flatbuffers.Builder, data:number[]|Uint8Array):flatbuffers.Offset;
static createNormalVector(builder:flatbuffers.Builder, data:number[]|Float32Array|Uint8Array):flatbuffers.Offset {
  builder.startVector(4, data.length, 4);
  for (let i = data.length - 1; i >= 0; i--) {
    builder.addFloat32(data[i]!);
  }
  return builder.endVector();
}

static startNormalVector(builder:flatbuffers.Builder, numElems:number) {
  builder.startVector(4, numElems, 4);
}

static addIndex(builder:flatbuffers.Builder, indexOffset:flatbuffers.Offset) {
  builder.addFieldOffset(3, indexOffset, 0);
}

static createIndexVector(builder:flatbuffers.Builder, data:number[]|Uint32Array):flatbuffers.Offset;
/**
 * @deprecated This Uint8Array overload will be removed in the future.
 */
static createIndexVector(builder:flatbuffers.Builder, data:number[]|Uint8Array):flatbuffers.Offset;
static createIndexVector(builder:flatbuffers.Builder, data:number[]|Uint32Array|Uint8Array):flatbuffers.Offset {
  builder.startVector(4, data.length, 4);
  for (let i = data.length - 1; i >= 0; i--) {
    builder.addInt32(data[i]!);
  }
  return builder.endVector();
}

static startIndexVector(builder:flatbuffers.Builder, numElems:number) {
  builder.startVector(4, numElems, 4);
}

static endStreamedGeometry(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  return offset;
}

static createStreamedGeometry(builder:flatbuffers.Builder, idOffset:flatbuffers.Offset, positionOffset:flatbuffers.Offset, normalOffset:flatbuffers.Offset, indexOffset:flatbuffers.Offset):flatbuffers.Offset {
  StreamedGeometry.startStreamedGeometry(builder);
  StreamedGeometry.addId(builder, idOffset);
  StreamedGeometry.addPosition(builder, positionOffset);
  StreamedGeometry.addNormal(builder, normalOffset);
  StreamedGeometry.addIndex(builder, indexOffset);
  return StreamedGeometry.endStreamedGeometry(builder);
}
}
