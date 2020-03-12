package=${PWD##*/}

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