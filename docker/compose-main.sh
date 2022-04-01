if [ "$ver" == "" ]; then
ver=1.0.0
fi

echo "docker build -t \"registry.k8s.aramid.finance/diatomix-web:$ver-main\" -f Dockerfile.main .."
docker build -t "registry.k8s.aramid.finance/diatomix-web:$ver-main" -f Dockerfile.main .. || error_code=$?
if [ "$error_code" != "" ]; then
echo "$error_code";
    echo "failed to build";
	exit 1;
fi

docker push "registry.k8s.aramid.finance/diatomix-web:$ver-main" || error_code=$?
if [ "$error_code" != "" ]; then
echo "$error_code";
    echo "failed to push";
	exit 1;
fi

echo "Image: registry.k8s.aramid.finance/diatomix-web:$ver-main"