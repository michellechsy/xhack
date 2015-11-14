BIN=node_modules/.bin
MOCHA_ARGS=--compilers js:babel/register --recursive
MOCHA_TARGET="src/**/*.test.js"


build: test
	npm run build

clean:
	rm -rf lib

test: lint
	NODE_ENV=test $(BIN)/mocha $(MOCHA_ARGS) $(MOCHA_TARGET)

test-watch: lint
	NODE_ENV=test $(BIN)/mocha $(MOCHA_ARGS) -w $(MOCHA_TARGET)

lint:
	$(BIN)/eslint src

PHONY: build clean test test-watch lint
