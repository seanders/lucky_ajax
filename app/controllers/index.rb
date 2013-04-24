get '/' do
  erb :index
end


# TODO: convert this route to use AJAX
post '/rolls' do
  # content_type: txt
  value = nil
  @roll = value ? Roll.create({ value: value }) : Roll.create
  puts @roll.to_json
  value = @roll.value.to_json
  p value
  value
  # p @roll.value
  # string = @roll.value
  # p string
  # string
  # # erb :index
end
