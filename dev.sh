docker build -t rift.host .
docker run --rm -d -p 8086:8086 rift.host