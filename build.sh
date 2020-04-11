package=${PWD##*/}

mv ./package.json ./wait

mv ./package.build.json ./package.json

if [ ! -d "node_modules" ]; then
    yarn
fi

tsc --outDir ./build

cd ..

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

cp -r ../../$package/build ./build
cp ../../$package/package.json ./package.json

cd ../../$package

mv ./package.json ./package.build.json

mv ./wait ./package.json