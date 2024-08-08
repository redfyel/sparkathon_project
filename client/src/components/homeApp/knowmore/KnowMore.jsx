import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import Bookshelf from "../../../models/dusty_old_bookshelf/Bookshelf";

function KnowMore() {
  return (
    <>
      <Canvas>
        <ambientLight />
        <OrbitControls />
        <Suspense fallback={null}>
          <Bookshelf />
        </Suspense>
        <Environment preset="sunset" />
      </Canvas>
    </>
  );
}

export default KnowMore
