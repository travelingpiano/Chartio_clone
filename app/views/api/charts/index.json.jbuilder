@charts.each do |chart|
  json.set! chart.id do
    json.extract! chart, :title, :chart_type, :xAxis, :yAxis,:user_id, :id, :shared_users
  end
end
