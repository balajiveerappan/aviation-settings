package com.aviation.poc.settings.controller;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.aviation.poc.settings.entity.Filter;
import com.aviation.poc.settings.rest.client.AviationComponentApiClient;
import com.aviation.poc.settings.service.AviationSettingsService;
import com.aviation.poc.settings.util.SettingsConstants;
import com.aviation.poc.settings.vo.ComponentVO;

@RestController
public class AviationSettingsController {

	@Autowired
	private AviationSettingsService  aviationSettingsService;
	@Autowired
	private AviationComponentApiClient componentApiClient;
	@RequestMapping(value="/splashScreen", method=RequestMethod.GET, produces=MediaType.APPLICATION_JSON_VALUE)
	public List<Object> getSplashData(@RequestParam String componentType){
		return componentApiClient.getSplashScreenData(componentType);
	}
	
	@RequestMapping(value = "/getFilters", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	@ResponseBody
	public List<Filter> getFilters() {
		return aviationSettingsService.getFilters();
	}
	
	
	@RequestMapping(value = "/loadComponent", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	@ResponseBody
	public List<ComponentVO> loadComponent(@RequestParam(required = false) String start,@RequestParam(required = false) String end) {
		return componentApiClient.getComponentData(start, end);
	}
}
