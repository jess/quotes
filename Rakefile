desc "Create a new quote page"
task :new_quote, :name do |t, args|
  client = args[:name]
  dir_name = client.gsub(' ', '-')
  dest = File.join("views/quotes/#{dir_name}")
  puts "Create quote for #{args[:name]}..."
  FileUtils.mkdir(dest)
  FileUtils.cp("template/index.html.haml", dest)
  puts "Ok, start quoting in #{dest}"
end
