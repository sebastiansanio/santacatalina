package org.kiakaha.santacatalina.controllers;

import java.io.ByteArrayOutputStream;
import java.io.OutputStream;
import java.sql.SQLException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.poi.hssf.usermodel.HSSFSheet;
import org.apache.poi.hssf.usermodel.HSSFWorkbook;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.Row;
import org.kiakaha.santacatalina.model.Order;
import org.kiakaha.santacatalina.repositories.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/export")
public class ExportController{
	
	@Autowired
	private OrderRepository orderRepository;

	@GetMapping(path = "/excel", produces = MediaType.APPLICATION_JSON_VALUE)
    public void excel(HttpServletRequest request, HttpServletResponse response) throws SQLException{
		SimpleDateFormat sdf = new SimpleDateFormat("MM/DD/YYYY");
		try {
 
           
        	HSSFWorkbook wb  = new HSSFWorkbook();
 
        	HSSFSheet sheet  = wb.createSheet();
        	wb.setSheetName(wb.getSheetIndex(sheet), "PEDIDOS");
 
        	Row rowhead = sheet.createRow(0);
 
        	int rowCount = 1;
 
 
        		ArrayList<String> headers = new ArrayList<String>();
        		headers.add("Codigo");
        		headers.add("Fecha");
        		headers.add("Mesa");
        		headers.add("Monto");
        		headers.add("Descuento");
        		
        		int size = headers.size();
 
        		for (int i = 0; i < size; i++) {
        			rowhead.createCell(i).setCellValue(headers.get(i));
        		}
 
        		Iterable<Order> listOrders = orderRepository.findAll();
        		for(Order order: listOrders) {
        			Row row = sheet.createRow(rowCount++);
        			for(int i =0 ; i < size; i++){
        				Cell cell = row.createCell(0);
        				cell.setCellValue(order.getCode());
        				Cell cell1 = row.createCell(1);
        				cell1.setCellValue(sdf.format(order.getDate()));
        				Cell cell2 = row.createCell(2);
        				cell2.setCellValue(order.getTable());
        				Cell cell3 = row.createCell(3);
        				cell3.setCellValue(order.getTotalAmount() != null ? order.getTotalAmount().toString() : "");
        				Cell cell4 = row.createCell(4);
        				cell4.setCellValue(order.getDiscount() != null ? order.getDiscount().toString() : "");
        			}
        		}
 
        		for(int i=0; i<=size; i++){
        			sheet.autoSizeColumn(i);
        		}
 
 
            String filename ="Pedidos_" + sdf.format(new Date()) + ".xls";
            ByteArrayOutputStream outByteStream = new ByteArrayOutputStream();
            wb.write(outByteStream);
            byte [] outArray = outByteStream.toByteArray();
            response.setContentType("application/ms-excel");
            response.setContentLength(outArray.length);
            response.setHeader("Expires:", "0"); // eliminates browser caching
            response.setHeader("Content-Disposition", "attachment; filename=" + filename);
            OutputStream outStream = response.getOutputStream();
            	outStream.write(outArray);
            outStream.flush();
 
        } catch (Exception e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }finally{
            //close out/in streams
        }
 
}
}
