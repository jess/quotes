module ViewHelpers
  def line_item(item, descr, units, options={})
    render "/partials/line_item", :locals => {:item => item, :descr => descr, :units => units, :unit_price => options[:unit_price], :spacer => options[:spacer], :subtotal => options[:subtotal]}
  end
end
