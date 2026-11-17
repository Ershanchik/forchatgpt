# Tax Calculator — Cloud Native DevOps Exercise

This is an original minimal **practice implementation**, not the
IBM Skills Network official starter code.

## Test
Run npm install and then npx jasmine from this directory.
Seven specs verify calculator behavior.

## Docker
docker build -t tax-calculator .
docker run -d --name tax-calculator -p 8080:80 tax-calculator
docker ps

## Tekton
Apply tasks.yaml, pipeline.yaml, run.yaml to a Tekton cluster with
git-clone and buildah Tasks installed. The image registry must be
configured with valid credentials and the actual IBM Cloud namespace
before running.

Evidence from any successful GitHub Actions run applies only to
this practice implementation. IBM Cloud deploy evidence requires
a genuine deployment and cannot be generated from local files alone.
