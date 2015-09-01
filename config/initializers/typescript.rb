ENV['TS_APP_ROOT'] = Rails.root.to_s
ENV['TS_APP'] = ENV['TS_APP_ROOT'] + '/app/assets/javascripts/ztypescript'
ENV['TS_APP_COMPILED'] = ENV['TS_APP'] + '/compiled'

#TypeScript::Src.use_external_tsc = true

# Typescript::Rails::Compiler.default_options = [ 
# 	'--target', 'ES5', 
# 	'--noImplicitAny', 
# 	'--emitDecoratorMetadata', '--experimentalDecorators',
# 	'--module', 'system' ]