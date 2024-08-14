import React from 'react'
import { useGLTF } from '@react-three/drei'

export default function  Model(props) {
  const { nodes, materials } = useGLTF('/sidetable.gltf')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh geometry={nodes.defaultMaterial.geometry} material={materials.Glass} position={[0, 12.397, 6.845]} rotation={[-Math.PI / 2, 0, -Math.PI]} scale={[4.262, 1, 6.227]} />
          <mesh geometry={nodes.defaultMaterial_1.geometry} material={materials.sidetableT} position={[172.747, 0, 52.696]} rotation={[-Math.PI / 2, 0, 0]} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('../../../models/side_table/sidetable.gltf')
