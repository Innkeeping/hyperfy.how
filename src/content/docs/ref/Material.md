---
title: Material
description: A material on a Mesh node.
---

A material on a [Mesh](/ref/Mesh) node.

## Properties

### `.textureX`: Number

The offset of the texture on the `x` axis. Useful for UV scrolling.

### `.textureY`: Number

The offset of the texture on the `y` axis. Useful for UV scrolling.

### `.emissiveIntensity`: Number

The emissive intensity of the material. Values greater than `1` will activate HDR Bloom, as long as the emissive color is not black.