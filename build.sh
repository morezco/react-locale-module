package=${PWD##*/}
REACT_MODULES=#PATH TO REACT MODULES DIRECTORY


if [ -f ./wait ]; then
    mv ./wait ./package.build.json
fi

if [ ! -f ./package.json ]; then
    cp ./package.backup.json ./package.json
fi

mv ./package.json ./wait

mv ./package.build.json ./package.json

if [ ! -d "node_modules" ]; then
    yarn
fi

tsc --outDir ./build

cd $REACT_MODULES

if [ ! -d "_builds" ]; then
    mkdir _builds
fi

cd _builds

if [ -d $package ]; then
    rm -r $package
fi

mkdir $package
cd $package

if [ -d "build" ]; then
    rm -r build
fi

cp -r $REACT_MODULES/$package/build $REACT_MODULES/_builds/$package/build
cp $REACT_MODULES/$package/wait $REACT_MODULES/_builds/$package/package.json

if [ ! -d ./build/DevTools/assets/fonts ]; then
    mkdir $REACT_MODULES/_builds/$package/build/DevTools/assets/fonts
fi

cp $REACT_MODULES/$package/src/DevTools/assets/fonts.css $REACT_MODULES/_builds/$package/build/DevTools/assets/fonts.css
cp -R $REACT_MODULES/$package/src/DevTools/assets/fonts $REACT_MODULES/_builds/$package/build/DevTools/assets

cd $REACT_MODULES/$package

mv ./package.json ./package.build.json

mv ./wait ./package.json