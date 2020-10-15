document.addEventListener('DOMContentLoaded', function() {
    const canvas = document.querySelector('#canvas');
    const engine = new BABYLON.Engine(canvas, true);

    const createScene = function () {
        const scene = new BABYLON.Scene(engine);
        scene.clearColor = new BABYLON.Color3.White(); 

        const light = new BABYLON.PointLight("Omni", new BABYLON.Vector3(20, 20, 100), scene);

        const camera = new BABYLON.ArcRotateCamera('arcCamera',0, 0.8, 100, BABYLON.Vector3.Zero(), scene);
        camera.attachControl(canvas, true);

        BABYLON.SceneLoader.ImportMesh('', '', 'star-wars-vader-tie-fighter.babylon', scene, function(newMeshes){
            camera.target = newMeshes[0];
        });

        return scene;
    };

    const scene = createScene();
    engine.runRenderLoop(function(){
        scene.render();
    });
});

