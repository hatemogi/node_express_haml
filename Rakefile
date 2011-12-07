require 'coffee-script'

task :default => :compile
task :compile do
  Dir.glob('src/*.coffee') do |cf|
    puts "compiling #{cf}"
    js = CoffeeScript.compile File.read(cf)
    open(cf.gsub(/^src\//, 'build/').gsub(/\.coffee$/, '') + '.js', 'w') do |f|
      f.puts js
    end
  end
end
