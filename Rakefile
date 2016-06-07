###
# Papers We Love Rake
###

require 'date'

MM = 'bundle exec middleman'

desc 'Build PWL.org'
task :build do
  status = system("#{MM} build")
  puts status ? 'Build OK' : 'Build FAIL!'
end

desc 'Run the preview server at http://localhost:4567'
task :preview do
  system("#{MM} server")
end

desc 'Deploy PWL.org'
task :deploy do
  # Put s3cmd S3 deploy shiz here
  #status = system("#{MM} deploy")
  #puts status ? 'Deploy OK' : 'Deploy FAIL!'
end

desc 'Pull down the latest changes in the repo'
task :pull do
  status = system('git pull');
  puts status ? 'Git pull OK' : 'Git pull FAIL!'
end

desc 'Rebuild the site using updated Meetup.com information'
task refresh: %w[pull build deploy]
