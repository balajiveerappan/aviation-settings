package com.aviation.poc.settings.service;


import java.util.List;

import com.aviation.poc.settings.entity.Filter;
public interface AviationSettingsService {

	List<Filter> getFilters();
	
	public void saveFilter(final Filter filter);
	
	public int updateFilter(Filter filter);
}
