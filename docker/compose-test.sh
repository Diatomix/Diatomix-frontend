if [ "$ver" == "" ]; then
ver=1.0.0
fi

echo "docker build -t \"registry.k8s.aramid.finance/diatomix-web:$ver-test\" -f Dockerfile.test .."
docker build -t "registry.k8s.aramid.finance/diatomix-web:$ver-test" -f Dockerfile.test .. || error_code=$?
if [ "$error_code" != "" ]; then
echo "$error_code";
    echo "failed to build";
	exit 1;
fi

docker push "registry.k8s.aramid.finance/diatomix-web:$ver-test" || error_code=$?
if [ "$error_code" != "" ]; then
echo "$error_code";
    echo "failed to push";
	exit 1;
fi

echo "Image: registry.k8s.aramid.finance/diatomix-web:$ver-test"