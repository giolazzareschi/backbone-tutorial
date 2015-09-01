require 'open3'
require 'pathname'

module TS
	class Typescript

		def compile
			files = Dir.glob("#{Rails.root}/app/assets/**/*.ts")
			outnm = ""
			files.each do |file|
				outnm = outnm + " " + file				
			end
			Open3.capture2("tsc --target ES5 --module system --outDir #{ENV['TS_APP_COMPILED']} " + outnm)
		end

	end
end